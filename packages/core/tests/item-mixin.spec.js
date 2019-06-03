import { LitElement, html } from 'lit-element';
import { defineCE, fixture } from '@open-wc/testing-helpers';
import {
  enter,
  spaceDown,
  spaceUp,
  space,
  blur,
  focus,
  mousedown,
  mouseup
} from '@aybolit/test-helpers';
import { ItemMixin } from '../src/mixins/item-mixin.js';

describe('item-mixin', () => {
  const Item = defineCE(
    class extends ItemMixin(LitElement) {
      render() {
        return html`
          <div><slot></slot></div>
        `;
      }
    }
  );

  let item;

  beforeEach(async () => {
    item = await fixture(`<${Item}>Item content</${Item}>`);
  });

  it('should not have focused attribute when not focused', () => {
    expect(item.hasAttribute('focused')).to.be.false;
  });

  it('should have focused attribute when focused', () => {
    focus(item);
    expect(item.hasAttribute('focused')).to.be.true;
  });

  it('should not have focused attribute when blurred', () => {
    focus(item);
    blur(item);
    expect(item.hasAttribute('focused')).to.be.false;
  });

  it('should have active attribute on mousedown', () => {
    mousedown(item);
    expect(item.hasAttribute('active')).to.be.true;
  });

  it('should not have active attribute after mouseup', () => {
    mousedown(item);
    mouseup(item);
    expect(item.hasAttribute('active')).to.be.false;
  });

  it('should have active attribute on space down', () => {
    spaceDown(item);
    expect(item.hasAttribute('active')).to.be.true;
  });

  it('should not have active attribute after space up', () => {
    spaceDown(item);
    spaceUp(item);
    expect(item.hasAttribute('active')).to.be.false;
  });

  it('should not have focus-ring if not focused', () => {
    expect(item.hasAttribute('focus-ring')).to.be.false;
  });

  it('should not have focus-ring attribute when not focused with keyboard', () => {
    mousedown(item);
    focus(item);
    expect(item.hasAttribute('focus-ring')).to.be.false;
  });

  it('should have focus-ring attribute when focused with keyboard', () => {
    focus(item);
    expect(item.hasAttribute('focus-ring')).to.be.true;
  });

  it('should not have focus-ring after blur', () => {
    focus(item);
    blur(item);
    expect(item.hasAttribute('focus-ring')).to.be.false;
  });

  it('should be not selected after disabled', () => {
    space(item);
    item.disabled = true;
    expect(item.selected).to.be.false;
  });

  it('should not be selectable if disabled', async () => {
    item.disabled = true;
    await item.updateComplete;
    space(item);
    expect(item.selected).to.be.false;
  });

  it('should have aria-disabled when disabled', async () => {
    item.disabled = true;
    await item.updateComplete;
    expect(item.getAttribute('aria-disabled')).to.equal('true');

    item.disabled = false;
    await item.updateComplete;
    expect(item.getAttribute('aria-disabled')).to.be.null;
  });

  it('should unselect on subsequent click event', () => {
    item.click();
    item.click();
    expect(item.selected).to.be.false;
  });

  it('should fire click event when selected with keyboard', () => {
    const clickSpy = sinon.spy();
    item.addEventListener('click', clickSpy);
    enter(item);
    expect(clickSpy).to.be.calledOnce;
  });

  it('should not fire click event if keyup was not preceded by keydown', () => {
    const clickSpy = sinon.spy();
    item.addEventListener('click', clickSpy);
    spaceUp(item);
    expect(clickSpy).not.to.be.called;
  });
});
