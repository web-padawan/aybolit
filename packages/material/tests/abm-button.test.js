import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbmButton } from '../src/components/abm-button.js';

const Button = defineCE(
  class extends AbmButton {
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

const fixture = ({ theme = '', disabled = false, link = null, label = 'button' }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${buttonTag}
      .disabled="${disabled}"
      .link="${link}"
      theme="${theme}"
    >
      ${label}
    </${buttonTag}>
  `;
};

export default html`
  <div>
    ${fixture({ label: 'text' })} ${fixture({ disabled: true, label: 'text disabled' })}
    ${fixture({ theme: 'outlined', label: 'outlined' })}
    ${fixture({ theme: 'outlined', disabled: true, label: 'outlined disabled' })}
    ${fixture({ theme: 'contained', label: 'contained' })}
    ${fixture({ theme: 'contained', disabled: true, label: 'contained disabled' })}
    ${fixture({ link: 'https://example.com', label: 'link' })}
  </div>
`;
