import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbmCheckbox } from '../src/components/abm-checkbox.js';

const Checkbox = defineCE(
  class extends AbmCheckbox {
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

const checkboxTag = unsafeStatic(Checkbox);

const fixture = ({ disabled = false, checked = false, indeterminate = false, label }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${checkboxTag}
      .disabled="${disabled}"
      .checked="${checked}"
      .indeterminate="${indeterminate}"
      >
      ${label}
    </${checkboxTag}>
  `;
};

export default html`
  ${fixture({ label: 'unchecked' })} ${fixture({ disabled: true, label: 'disabled' })}
  ${fixture({ checked: true, label: 'checked' })}
  ${fixture({ checked: true, disabled: true, label: 'checked disabled' })}
  ${fixture({ indeterminate: true, label: 'indeterminate' })}
  ${fixture({ indeterminate: true, disabled: true, label: 'indeterminate disabled' })}
`;
