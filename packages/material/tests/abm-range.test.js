import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbmRange } from '../src/components/abm-range.js';

const Range = defineCE(
  class extends AbmRange {
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

const fixture = ({ disabled = false, value = 0 }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${rangeTag} .disabled="${disabled}" .value="${value}"></${rangeTag}>
  `;
};

export default html`
  ${fixture({ value: 0 })} ${fixture({ value: 50 })} ${fixture({ value: 100 })}
  ${fixture({ disabled: true, value: 50 })}
`;
