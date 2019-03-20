import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbuCheckbox } from '../src/components/abu-checkbox.js';
import { themes, variants } from '../theme/theme.js';

const Checkbox = defineCE(
  class extends AbuCheckbox {
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
  size = '',
  disabled = false,
  checked = false,
  indeterminate = false,
  filled = false,
  label = 'checkbox'
}) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${checkboxTag}
      .disabled="${disabled}"
      .checked="${checked}"
      .indeterminate="${indeterminate}"
      theme="${theme}"
      size="${size}"
      ?filled=${filled}
      >
      ${label}
    </${checkboxTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    <div>
      ${fixture({ theme, checked: true, label: theme })}
      ${fixture({ theme, disabled: true, label: 'disabled' })}
      ${fixture({ theme, checked: true, disabled: true, label: 'checked disabled' })}
      ${fixture({ theme, indeterminate: true, label: 'indeterminate' })}
      ${fixture({ theme, indeterminate: true, disabled: true, label: 'indeterminate disabled' })}
      ${fixture({ theme, checked: true, filled: true, label: 'filled' })}
      ${fixture({ theme, checked: true, filled: true, disabled: true, label: 'filled disabled' })}
      ${fixture({ theme, indeterminate: true, filled: true, label: 'filled indeterminate' })}
      ${fixture({
        theme,
        indeterminate: true,
        filled: true,
        disabled: true,
        label: 'filled indeterminate disabled'
      })}
    </div>
  `;
});

export default html`
  ${tpl} ${variants.map(size => fixture({ size, label: size }))}
`;
