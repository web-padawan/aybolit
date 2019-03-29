import { defineCE, fixture } from '@open-wc/testing-helpers';
import { BadgeElement } from '../src/components/badge.js';

describe('badge', () => {
  const Badge = defineCE(class extends BadgeElement {});
  let badge;

  beforeEach(async () => {
    badge = await fixture(`<${Badge}>Badge</${Badge}>`);
  });

  it('should render span element by default', () => {
    expect(badge.shadowRoot.querySelector('span')).to.be.ok;
  });

  it('should render anchor element if link property is not empty', async () => {
    badge.link = 'https://example.com';
    await badge.updateComplete;
    expect(badge.shadowRoot.querySelector('span')).to.be.not.ok;
    const link = badge.shadowRoot.querySelector('a');
    expect(link).to.be.ok;
    expect(link.getAttribute('href')).to.be.equal(badge.link);
  });
});
