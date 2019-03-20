import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbuSwitch } from '../src/components/abu-switch.js';
import { themes, variants } from '../theme/theme.js';

const Switch = defineCE(
  class extends AbuSwitch {
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

const switchTag = unsafeStatic(Switch);

const fixture = ({
  theme = '',
  size = '',
  checked = false,
  disabled = false,
  outlined = false,
  rounded = false,
  label = 'switch'
}) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${switchTag}
      .checked="${checked}"
      .disabled="${disabled}"
      theme="${theme}"
      size="${size}"
      ?outlined="${outlined}"
      ?rounded="${rounded}"
    >
      ${label}
    </${switchTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    <div>
      ${fixture({ theme, checked: true, label: theme })}
      ${fixture({ theme, checked: true, disabled: true, label: 'disabled' })}
      ${fixture({ theme, checked: true, outlined: true, label: 'outlined' })}
      ${fixture({
        theme,
        checked: true,
        disabled: true,
        outlined: true,
        label: 'outlined disabled'
      })}
      ${fixture({ theme, checked: true, rounded: true, label: 'rounded' })}
      ${fixture({ theme, checked: true, outlined: true, rounded: true, label: 'outlined rounded' })}
    </div>
  `;
});

export default html`
  ${tpl}
  <div>
    ${fixture({ rounded: true, label: 'rounded' })}
    ${fixture({ outlined: true, rounded: true, label: 'outlined rounded' })}
    ${fixture({ disabled: true, outlined: true, label: 'outlined disabled' })}
    ${fixture({
      disabled: true,
      rounded: true,
      outlined: true,
      label: 'outlined rounded disabled'
    })}
  </div>
  <div>
    ${variants.map(size => fixture({ size, label: size }))}
  </div>
`;
