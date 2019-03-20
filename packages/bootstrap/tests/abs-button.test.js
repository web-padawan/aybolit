import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbsButton } from '../src/components/abs-button.js';
import { colors, variants } from '../theme/theme.js';

const Button = defineCE(
  class extends AbsButton {
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
  outline = false,
  label = 'button'
}) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${buttonTag}
      .disabled="${disabled}"
      .link="${link}"
      theme="${theme}"
      size="${size}"
      ?outline="${outline}"
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
      ${fixture({ theme, outline: true, label: 'outline' })}
      ${fixture({ theme, disabled: true, outline: true, label: 'outline disabled' })}
      ${fixture({ theme, link: 'https://example.com', label: 'Link' })}
      ${variants.map(size => fixture({ theme, size, label: size }))}
    </div>
  `;
});

export default html`
  ${tpl}
`;
