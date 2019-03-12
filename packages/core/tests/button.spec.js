import { defineCE, fixture } from '@open-wc/testing-helpers';
import { ButtonElement } from '../src/components/button.js';

describe('button', () => {
  const Button = defineCE(class extends ButtonElement {});
  let button;

  beforeEach(async () => {
    button = await fixture(`<${Button}>Button</${Button}>`);
  });

  it('should propagate disabled property to native element', async () => {
    button.disabled = true;
    await button.updateComplete;
    expect(button.focusElement.hasAttribute('disabled')).to.be.true;
  });

  it('should render button element by default', () => {
    expect(button.focusElement.tagName.toLowerCase()).to.be.eql('button');
  });

  it('should render anchor element if link property is not empty', async () => {
    button.link = 'http://example.com';
    await button.updateComplete;
    expect(button.focusElement.tagName.toLowerCase()).to.be.eql('a');
    expect(button.focusElement.getAttribute('href')).to.be.eql(button.link);
  });

  it('should set role="button" on host element', () => {
    expect(button.getAttribute('role')).to.be.eql('button');
  });

  it('should set type="button" on the native button', () => {
    expect(button.focusElement.getAttribute('type')).to.be.eql('button');
  });

  it('should set role="presentation" on the native button', () => {
    expect(button.focusElement.getAttribute('role')).to.be.eql('presentation');
  });
});
