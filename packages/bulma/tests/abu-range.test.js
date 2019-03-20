import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbuRange } from '../src/components/abu-range.js';
import { themes, variants } from '../theme/theme.js';

const Range = defineCE(
  class extends AbuRange {
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

const fixture = ({ theme = '', size = '', disabled = false, rounded = false, value = 0 }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${rangeTag}
      .disabled="${disabled}"
      .value="${value}"
      theme="${theme}"
      size="${size}"
      ?rounded="${rounded}"
    ></${rangeTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    ${fixture({ theme, value: 50 })} ${fixture({ theme, disabled: true, value: 50 })}
  `;
});

export default html`
  ${fixture({ value: 50 })} ${fixture({ disabled: true, value: 50 })}
  ${fixture({ rounded: true, value: 50 })} ${variants.map(size => fixture({ size, value: 50 }))}
  ${tpl}
`;
