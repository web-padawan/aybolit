import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbmProgress } from '../src/components/abm-progress.js';

const Progress = defineCE(
  class extends AbmProgress {
    static get styles() {
      return [
        super.styles,
        /* add margin and disable transitions for visual tests */
        css`
          :host {
            margin: 5px;
          }

          progress::-webkit-progress-value {
            transition: none;
          }

          progress::-moz-progress-bar {
            transition: none;
          }

          progress::-ms-fill {
            transition: none;
          }
        `
      ];
    }
  }
);

const progressTag = unsafeStatic(Progress);

const fixture = ({ value, max = 100 }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${progressTag}
      .value="${value}"
      .max="${max}"
    ></${progressTag}>
  `;
};

export default html`
  ${fixture({ value: 0 })} ${fixture({ value: 50 })} ${fixture({ value: 100 })}
`;
