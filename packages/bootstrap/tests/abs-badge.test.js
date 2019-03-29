import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbsBadge } from '../src/components/abs-badge.js';
import { themes } from '../theme/theme.js';

const Badge = defineCE(
  class extends AbsBadge {
    static get styles() {
      return [
        super.styles,
        css`
          :host {
            margin: 5px;
          }
        `
      ];
    }
  }
);

const badgeTag = unsafeStatic(Badge);

const fixture = ({ theme = '', link = '', rounded = false, label = '' }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${badgeTag} .link="${link}" ?rounded="${rounded}" theme="${theme}">${label}</${badgeTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    <div>
      ${fixture({ theme, label: theme })} ${fixture({ theme, label: 'rounded', rounded: true })}
      ${fixture({ theme, link: 'https://example.com', label: 'link' })}
    </div>
  `;
});

export default html`
  ${fixture({ label: 'badge' })} ${fixture({ label: 'rounded', rounded: true })} ${tpl}
`;
