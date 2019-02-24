import { defineCE, fixture } from '@open-wc/testing-helpers';
import { matchesSelector } from '@aybolit/test-helpers';
import { ProgressElement } from '../../progress.js';

describe('progress', () => {
  const AyboProgress = defineCE(class extends ProgressElement {});

  let element;
  let progress;

  beforeEach(async () => {
    element = await fixture(`<${AyboProgress}></${AyboProgress}>`);
    progress = element.shadowRoot.querySelector('progress');
  });

  it('should render progress to the shadow root', () => {
    expect(progress instanceof HTMLProgressElement).to.be.true;
  });

  it('should set value to 0 by default and propagate it to progress', () => {
    expect(element.value).to.equal(0);
    expect(progress.value).to.equal(0);
  });

  it('should set max to 1 by default and propagate it to progress', () => {
    expect(element.max).to.equal(1);
    expect(progress.max).to.equal(1);
  });

  it('should make progress indeterminate when value set to null', async () => {
    element.value = null;
    await element.updateComplete;
    expect(progress.hasAttribute('value')).to.be.false;
    expect(matchesSelector(progress, ':indeterminate')).to.be.true;
  });

  it('should make progress indeterminate when value set to undefined', async () => {
    element.value = undefined;
    await element.updateComplete;
    expect(progress.hasAttribute('value')).to.be.false;
    expect(matchesSelector(progress, ':indeterminate')).to.be.true;
  });

  it('should make progress indeterminate when value set to empty string', async () => {
    element.value = '';
    await element.updateComplete;
    expect(progress.hasAttribute('value')).to.be.false;
    expect(matchesSelector(progress, ':indeterminate')).to.be.true;
  });
});
