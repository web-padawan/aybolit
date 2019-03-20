import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbmSwitch } from '../src/components/abm-switch.js';

const Switch = defineCE(
  class extends AbmSwitch {
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

const fixture = ({ disabled = false, checked = false, label = 'switch' }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${switchTag} .disabled="${disabled}" .checked="${checked}">${label}</${switchTag}>
  `;
};

export default html`
  ${fixture({ label: 'unchecked' })} ${fixture({ disabled: true, label: 'unchecked disabled' })}
  ${fixture({ checked: true, label: 'checked' })}
  ${fixture({ checked: true, disabled: true, label: 'checked disabled' })}
`;
