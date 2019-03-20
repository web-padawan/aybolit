import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbuButton } from '../src/components/abu-button.js';
import { colors, variants } from '../theme/theme.js';

const Button = defineCE(
  class extends AbuButton {
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

const buttonTag = unsafeStatic(Button);

const fixture = ({
  theme = '',
  size = '',
  disabled = false,
  link = null,
  outlined = false,
  rounded = false,
  label = 'button'
}) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${buttonTag}
      .disabled="${disabled}"
      .link="${link}"
      theme="${theme}"
      size="${size}"
      ?outlined="${outlined}"
      ?rounded="${rounded}"
    >
      ${label}
    </${buttonTag}>
  `;
};

const tpl = Object.values(colors).map(theme => {
  return html`
    <div>
      ${fixture({ theme, label: theme || 'button' })}
      ${fixture({ theme, disabled: true, label: 'disabled' })}
      ${fixture({ theme, outlined: true, label: 'outlined' })}
      ${fixture({ theme, disabled: true, outlined: true, label: 'outlined disabled' })}
      ${fixture({ theme, rounded: true, label: 'rounded' })}
      ${fixture({ theme, outlined: true, rounded: true, label: 'outlined rounded' })}
      ${fixture({ theme, link: 'https://example.com', label: 'Link' })}
    </div>
  `;
});

export default html`
  ${tpl}
  <div>
    ${variants.map(size => fixture({ size, label: size }))}
  </div>
`;
