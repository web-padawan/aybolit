import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbsRange } from '../src/components/abs-range.js';
import { themes } from '../theme/theme.js';

const Range = defineCE(
  class extends AbsRange {
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

const rangeTag = unsafeStatic(Range);

const fixture = ({ theme = '', disabled = false, value = 0 }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${rangeTag} .disabled="${disabled}" .value="${value}" theme="${theme}"></${rangeTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    ${fixture({ theme, value: 50 })}
  `;
});

export default html`
  ${tpl} ${fixture({ disabled: true, value: 50 })}
`;
