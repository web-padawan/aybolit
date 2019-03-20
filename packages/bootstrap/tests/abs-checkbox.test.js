import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbsCheckbox } from '../src/components/abs-checkbox.js';
import { themes } from '../theme/theme.js';

const Checkbox = defineCE(
  class extends AbsCheckbox {
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

const fixture = ({
  theme = '',
  disabled = false,
  checked = false,
  indeterminate = false,
  label = 'checkbox'
}) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${checkboxTag}
      .disabled="${disabled}"
      .checked="${checked}"
      .indeterminate="${indeterminate}"
      theme="${theme}"
      >
      ${label}
    </${checkboxTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    <div>
      ${fixture({ theme, label: theme })} ${fixture({ theme, disabled: true, label: 'disabled' })}
      ${fixture({ theme, checked: true, label: 'checked' })}
      ${fixture({ theme, checked: true, disabled: true, label: 'checked disabled' })}
      ${fixture({ theme, indeterminate: true, label: 'indeterminate' })}
      ${fixture({ theme, indeterminate: true, disabled: true, label: 'indeterminate disabled' })}
    </div>
  `;
});

export default html`
  ${tpl}
`;
