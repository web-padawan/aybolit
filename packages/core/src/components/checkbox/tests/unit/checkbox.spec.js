import { defineCE, fixture } from '@open-wc/testing-helpers';
import { CheckboxElement } from '../../checkbox.js';

describe('checkbox', () => {
  const Checkbox = defineCE(
    class extends CheckboxElement {
      static get styles() {
        return super.styles;
      }
    }
  );

  let checkbox;
  let input;
  let label;

  beforeEach(async () => {
    checkbox = await fixture(`
      <${Checkbox} name="name">Checkbox with <a href="#">link</a></${Checkbox}>
    `);
    input = checkbox.focusElement;
    label = checkbox.shadowRoot.querySelector('label');
  });

  it('should propagate disabled attribute to the native checkbox', async () => {
    checkbox.disabled = true;
    await checkbox.updateComplete;
    expect(input.hasAttribute('disabled')).to.equal(true);
  });

  it('should have default value "on"', () => {
    expect(checkbox.value).to.equal('on');
  });

  it('should have proper name', async () => {
    expect(checkbox.name).to.equal('');
    checkbox.checked = true;
    await checkbox.updateComplete;
    expect(checkbox.name).to.equal('name');
  });

  it('should toggle on label click', () => {
    label.click();
    expect(checkbox.checked).to.be.true;

    label.click();
    expect(checkbox.checked).to.be.false;
  });

  it('should not toggle on link inside host click', () => {
    const link = checkbox.querySelector('a');
    link.click();
    expect(checkbox.checked).to.be.false;
  });

  it('should not toggle on click when disabled', async () => {
    checkbox.disabled = true;
    await checkbox.updateComplete;
    label.click();
    expect(checkbox.checked).to.be.false;
  });

  it('should dispatch `checked-changed` event when checked changes', async () => {
    const spy = sinon.spy();
    checkbox.addEventListener('checked-changed', spy);
    checkbox.checked = true;
    await checkbox.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should forward change event from the input on the host element', async () => {
    const spy = sinon.spy();
    checkbox.addEventListener('change', spy);
    checkbox.checked = true;
    input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    await checkbox.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should bind checked to the native checkbox and vice versa', async () => {
    checkbox.checked = true;
    await checkbox.updateComplete;
    expect(input.checked).to.be.eql(true);

    input.checked = false;
    input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    await checkbox.updateComplete;
    expect(checkbox.checked).to.be.eql(false);
  });

  it('should bind indeterminate to the native checkbox and vice versa', async () => {
    checkbox.indeterminate = true;
    await checkbox.updateComplete;
    expect(input.indeterminate).to.equal(true);

    input.indeterminate = false;
    input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    await checkbox.updateComplete;
    expect(checkbox.indeterminate).to.equal(false);
  });

  it('should set aria-checked to "true" when checked', async () => {
    checkbox.checked = true;
    await checkbox.updateComplete;
    expect(checkbox.getAttribute('aria-checked')).to.equal('true');
  });

  it('should set aria-checked to "false" when unchecked', async () => {
    checkbox.checked = false;
    await checkbox.updateComplete;
    expect(checkbox.getAttribute('aria-checked')).to.equal('false');
  });

  it('should set aria-checked to "mixed" when indeterminate', async () => {
    checkbox.indeterminate = true;
    await checkbox.updateComplete;
    expect(checkbox.getAttribute('aria-checked')).to.equal('mixed');
  });

  it('should set indeterminate to false when clicked the first time', () => {
    checkbox.indeterminate = true;
    label.click();
    expect(checkbox.indeterminate).to.be.false;
  });

  it('should be checked after click when initially checked is false and indeterminate is true', async () => {
    checkbox.checked = false;
    checkbox.indeterminate = true;
    await checkbox.updateComplete;

    label.click();

    await checkbox.updateComplete;
    expect(checkbox.checked).to.be.true;
    expect(checkbox.indeterminate).to.be.false;
    expect(checkbox.getAttribute('aria-checked')).to.equal('true');
  });

  it('should not be checked after click when initially checked is true and indeterminate is true', async () => {
    checkbox.checked = true;
    checkbox.indeterminate = true;
    await checkbox.updateComplete;

    label.click();

    await checkbox.updateComplete;
    expect(checkbox.checked).to.be.false;
    expect(checkbox.indeterminate).to.be.false;
    expect(checkbox.getAttribute('aria-checked')).to.equal('false');
  });

  it('should not dispatch change event when checked changed programmatically', async () => {
    const spy = sinon.spy();
    checkbox.addEventListener('change', spy);
    checkbox.checked = true;
    await checkbox.updateComplete;
    expect(spy).to.not.be.called;
  });

  it('should dispatch change event when user checks the checkbox', async () => {
    const spy = sinon.spy();
    checkbox.addEventListener('change', spy);
    label.click();
    await checkbox.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should dispatch change event when user un-checks the checkbox', async () => {
    checkbox.checked = true;
    await checkbox.updateComplete;
    const spy = sinon.spy();
    checkbox.addEventListener('change', spy);
    label.click();
    await checkbox.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should set the `presentation` role on the native checkbox', () => {
    expect(checkbox.getAttribute('role')).to.equal('checkbox');
  });

  it('should set the `checkbox` role on the host element', () => {
    expect(checkbox.getAttribute('role')).to.equal('checkbox');
  });
});
