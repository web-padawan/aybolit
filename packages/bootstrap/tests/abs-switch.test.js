import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbsSwitch } from '../src/components/abs-switch.js';
import { themes } from '../theme/theme.js';

const Switch = defineCE(
  class extends AbsSwitch {
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

const fixture = ({ theme = '', disabled = false, checked = false, label = 'Switch' }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${switchTag} .disabled="${disabled}" .checked="${checked}" theme="${theme}">${label}</${switchTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    <div>
      ${fixture({ theme, label: theme })} ${fixture({ theme, disabled: true, label: 'disabled' })}
      ${fixture({ theme, checked: true, label: 'checked' })}
      ${fixture({ theme, checked: true, disabled: true, label: 'checked disabled' })}
    </div>
  `;
});

export default html`
  ${tpl}
`;
