import { LitElement } from 'lit-element';
import { focusin, shiftTabDown, shiftTabEvent } from '@aybolit/test-helpers';
import { defineCE, fixture, html } from '@open-wc/testing-helpers';
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
  });

  describe('focus', () => {
    it('should invoke focus on the focus element when focused', () => {
      const spy = sinon.spy(focusable, 'focus');
      customElement.focus();
      expect(spy).to.be.calledOnce;
    });

    it('should not invoke focus on the focus element when disabled', async () => {
      const spy = sinon.spy(focusable, 'focus');
      customElement.disabled = true;
      await customElement.updateComplete;
      customElement.focus();
      expect(spy).to.not.be.called;
    });

    it('should invoke focus on the focus element on focusin event', () => {
      const spy = sinon.spy(focusable, 'focus');
      focusin(customElement);
      expect(spy).to.be.calledOnce;
    });

    it('should not invoke focus on the focus element on focusin when disabled', async () => {
      const spy = sinon.spy(focusable, 'focus');
      customElement.disabled = true;
      await customElement.updateComplete;
      focusin(focusable);
      expect(spy).to.not.be.called;
    });

    it('should set _isShiftTabbing when pressing shift-tab', () => {
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
});
