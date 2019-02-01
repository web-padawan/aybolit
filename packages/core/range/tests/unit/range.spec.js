import { defineCE, fixture } from '@open-wc/testing-helpers';
import { RangeElement } from '../../range.js';

describe('range', () => {
  const AyboRange = defineCE(class extends RangeElement {});

  let range;
  let input;

  beforeEach(async () => {
    range = await fixture(`<${AyboRange}></${AyboRange}>`);
    input = range.shadowRoot.querySelector('input[type="range"]');
  });

  it('should render input with type range to the shadow root', () => {
    expect(input instanceof HTMLInputElement).to.be.true;
  });

  it('should set value to 0 by default and propagate it to input', () => {
    expect(range.min).to.equal(0);
    expect(input.value).to.equal('0');
  });

  it('should set min to 0 by default and propagate it to input', () => {
    expect(range.min).to.equal(0);
    expect(input.min).to.equal('0');
  });

  it('should set max to 100 by default and propagate it to input', () => {
    expect(range.max).to.equal(100);
    expect(input.max).to.equal('100');
  });

  it('should set step to 1 by default and propagate it to input', () => {
    expect(range.step).to.equal(1);
    expect(input.step).to.equal('1');
  });

  it('should update value when input value is changed', async () => {
    input.value = '1';
    input.dispatchEvent(new CustomEvent('input', { bubbles: true }));
    await range.updateComplete;
    expect(range.value).to.equal(1);
  });

  it('should dispatch value-changed event when input value is changed', async () => {
    const spy = sinon.spy();
    range.addEventListener('value-changed', spy);
    input.value = '1';
    input.dispatchEvent(new CustomEvent('input', { bubbles: true }));
    await range.updateComplete;
    expect(spy).to.be.calledOnce;
    expect(spy.firstCall.args[0].detail.value).to.equal(1);
  });

  it('should forward change event from the input on the host element', async () => {
    const spy = sinon.spy();
    range.addEventListener('change', spy);
    input.value = '1';
    input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
    await range.updateComplete;
    expect(spy).to.be.calledOnce;
  });

  it('should set value to min when a smaller value than min is given', async () => {
    range.value = -1;
    await range.updateComplete;
    expect(range.value).to.equal(0);
  });

  it('should set value to max when a bigger value than max is given', async () => {
    range.value = 101;
    await range.updateComplete;
    expect(range.value).to.equal(100);
  });

  it('should reset value to the default one if NaN value is given', async () => {
    range.value = 'a';
    await range.updateComplete;
    expect(range.value).to.equal(50);
  });

  it('should reset min to 0 if not a numeric min is given', async () => {
    range.min = 'a';
    await range.updateComplete;
    expect(range.min).to.equal(0);
  });

  it('should reset max to 100 if not a numeric max is given', async () => {
    range.max = 'a';
    await range.updateComplete;
    expect(range.max).to.equal(100);
  });

  it('should reset step to 1 if not a numeric step is given', async () => {
    range.step = 'a';
    await range.updateComplete;
    expect(range.step).to.equal(1);
  });
});
