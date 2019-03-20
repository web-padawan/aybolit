import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbsProgress } from '../src/components/abs-progress.js';
import { themes, variants } from '../theme/theme.js';

const Progress = defineCE(
  class extends AbsProgress {
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

const fixture = ({ theme = '', size = '', value = 50, max = 100, striped = false }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${progressTag}
      .value="${value}"
      .max="${max}"
      theme="${theme}"
      size="${size}"
      ?striped="${striped}"
    ></${progressTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    ${fixture({ theme })} ${fixture({ theme, striped: true })}
    ${variants.map(size => fixture({ theme, size }))}
  `;
});

export default html`
  ${tpl}
`;
