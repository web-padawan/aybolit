import { LitElement } from 'lit-element';
import {
  focusin,
  focusout,
  shiftTabDown,
  shiftTabEvent,
  shiftTabUp,
  spaceDown,
  spaceUp,
  tabDown,
  tabUp
} from '@aybolit/test-helpers';
import { defineCE, fixture, html, nextFrame, unsafeStatic } from '@open-wc/testing-helpers';
import { DelegateFocusMixin } from '../delegate-focus-mixin.js';

const TestElement = defineCE(
  class extends DelegateFocusMixin(LitElement) {
    render() {
      return html`
        <input id="input" /><input id="secondInput" />
      `;
    }

    get focusElement() {
      return this.shadowRoot.querySelector('#input');
    }
  }
);

describe('delegate-focus-mixin', () => {
  let customElement;
  let focusable;

  beforeEach(async () => {
    customElement = await fixture(`<${TestElement}></${TestElement}>`);
    focusable = customElement.focusElement;
  });

  describe('tabindex', () => {
    it('setting tabIndex should forward the value to the internal element', async () => {
      customElement.tabIndex = 1;
      await customElement.updateComplete;
      expect(focusable.getAttribute('tabindex')).to.be.equal('1');
    });

    it('should set tabindex to 0 by default', () => {
      expect(customElement.getAttribute('tabindex')).to.be.equal('0');
    });

    it('should update the attribute when setting tabIndex property', async () => {
      customElement.tabIndex = 1;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.be.equal('1');
    });

    it('should restore old tabindex when enabling the element', async () => {
      customElement.tabIndex = 1;
      customElement.disabled = true;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.not.be.ok;

      customElement.disabled = false;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.be.equal('1');
    });

    it('should remove tabindex when setting disabled to true', async () => {
      customElement.tabIndex = 1;
      customElement.disabled = true;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.not.be.ok;
    });

    it('should restore old tabindex when setting disabled to true and then back to false', async () => {
      customElement.tabIndex = 2;
      customElement.disabled = true;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.not.be.ok;

      customElement.disabled = false;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.be.equal('2');
    });
  });

  describe('_tabPressed and focus-ring', () => {
    it('should set and unset _tabPressed when press Tab', () => {
      tabDown(document.body);
      expect(customElement._tabPressed).to.be.true;
      tabUp(document.body);
      expect(customElement._tabPressed).to.be.false;
    });

    it('should set and unset _tabPressed when press Shift+Tab', () => {
      shiftTabDown(document.body);
      expect(customElement._tabPressed).to.be.true;
      shiftTabUp(document.body);
      expect(customElement._tabPressed).to.be.false;
    });

    it('should set _isShiftTabbing when pressing Shift+Tab', () => {
      const event = shiftTabEvent();
      customElement.dispatchEvent(event);
      expect(customElement._isShiftTabbing).to.be.true;
    });

    it('should skip setting _isShiftTabbing if event is defaultPrevented', () => {
      const event = shiftTabEvent();
      // In Edge just calling preventDefault() does not work because of the polyfilled dispatchEvent
      Object.defineProperty(event, 'defaultPrevented', {
        get() {
          return true;
        }
      });
      customElement.dispatchEvent(event);
      expect(customElement._isShiftTabbing).not.to.be.ok;
    });

    it('should not change _tabPressed on any other key except Tab', () => {
      spaceDown(document.body);
      expect(customElement._tabPressed).to.be.false;
      spaceUp(document.body);
      expect(customElement._tabPressed).to.be.false;
    });

    it('should set the focus-ring attribute when Tab is pressed and focus is received', () => {
      tabDown(document.body);
      focusin(focusable);
      expect(customElement.hasAttribute('focus-ring')).to.be.true;
      focusout(focusable);
      expect(customElement.hasAttribute('focus-ring')).to.be.false;
    });

    it('should set the focus-ring attribute when Shift+Tab is pressed and focus is received', () => {
      shiftTabDown(document.body);
      focusin(focusable);
      expect(customElement.hasAttribute('focus-ring')).to.be.true;
      focusout(focusable);
      expect(customElement.hasAttribute('focus-ring')).to.be.false;
    });

    it('should refocus the field', done => {
      focusin(customElement);
      shiftTabDown(document.body);

      // Shift + Tab disables refocusing temporarily, normal behavior is restored asynchronously.
      setTimeout(() => {
        const spy = sinon.spy(focusable, 'focus');
        focusin(customElement);
        expect(spy.called).to.be.true;
        done();
      }, 0);
    });
  });

  describe('disabled', () => {
    beforeEach(async () => {
      customElement.disabled = true;
      await customElement.updateComplete;
    });

    it('should not have tabindex if disabled when first update completed', () => {
      expect(customElement.getAttribute('tabindex')).to.not.be.ok;
    });

    it('should update internal element tabIndex', async () => {
      customElement.tabIndex = 4;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.be.null;
      expect(focusable.getAttribute('tabindex')).to.be.equal('4');
    });

    it('should have aria-disabled attribute set to true when disabled', async () => {
      expect(customElement.getAttribute('aria-disabled')).to.be.equal('true');
    });

    it('should not have aria-disabled attribute when is not disabled', async () => {
      customElement.disabled = false;
      await customElement.updateComplete;
      expect(customElement.getAttribute('aria-disabled')).to.not.be.ok;
    });

    it('should apply tabindex value, changed while element was disabled, once it is enabled', async () => {
      customElement.tabIndex = 3;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.not.be.ok;

      customElement.disabled = false;
      await customElement.updateComplete;
      expect(customElement.getAttribute('tabindex')).to.be.equal('3');
    });

    it('should not invoke focus on the focus element when disabled', () => {
      const spy = sinon.spy(focusable, 'focus');
      customElement.focus();
      expect(spy).to.not.be.called;
    });
  });

  describe('focus', () => {
    it('should not set focused attribute on host click', () => {
      customElement.click();
      expect(customElement.hasAttribute('focused')).to.be.false;
    });

    it('should set focused attribute on focusin event dispatched', () => {
      focusin(focusable);
      expect(customElement.hasAttribute('focused')).to.be.true;
    });

    it('should not set focused attribute on focusin event dispatched when disabled', () => {
      customElement.disabled = true;
      focusin(focusable);
      expect(customElement.hasAttribute('focused')).to.be.false;
    });

    it('should not set focused attribute on focusin event dispatched from other focusable element inside component', () => {
      const secondFocusable = customElement.shadowRoot.querySelector('#secondInput');
      focusin(secondFocusable);
      expect(customElement.hasAttribute('focused')).to.be.false;
    });

    it('should remove focused attribute when disconnected from the DOM', () => {
      focusin(focusable);
      customElement.parentNode.removeChild(customElement);
      window.ShadyDOM && window.ShadyDOM.flush();
      expect(customElement.hasAttribute('focused')).to.be.false;
    });
  });
});

describe('autofocus', () => {
  let customElement;

  beforeEach(async () => {
    customElement = await fixture(`<${TestElement} autofocus></${TestElement}>`);
  });

  it('should have focused and focus-ring set', async () => {
    await nextFrame();
    expect(customElement.hasAttribute('focused')).to.be.true;
    expect(customElement.hasAttribute('focus-ring')).to.be.true;
  });
});

describe('focused with nested focusable elements', () => {
  const tagName = unsafeStatic(TestElement);
  const Wrapper = defineCE(
    class extends DelegateFocusMixin(LitElement) {
      render() {
        return html`
          <${tagName} id="testElement"></${tagName}>
        `;
      }

      get focusElement() {
        return this.shadowRoot.querySelector('#testElement');
      }
    }
  );

  let wrapper;
  let customElement;
  let focusable;

  beforeEach(async () => {
    wrapper = await fixture(`<${Wrapper}></${Wrapper}>`);
    customElement = wrapper.focusElement;
    await customElement.updateComplete;
    focusable = customElement.focusElement;
  });

  it('should set focused attribute on focusin event dispatched from an element inside focusElement', () => {
    focusin(focusable);
    expect(wrapper.hasAttribute('focused')).to.be.true;
  });

  it('should remove focused attribute on focusout event dispatched from an element inside focusElement', () => {
    focusin(focusable);
    expect(wrapper.hasAttribute('focused')).to.be.true;

    focusout(focusable);
    expect(wrapper.hasAttribute('focused')).to.be.false;
  });
});
