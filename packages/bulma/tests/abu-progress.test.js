import { css } from 'lit-element';
import { html, defineCE, unsafeStatic } from '@open-wc/testing-helpers';
import { AbuProgress } from '../src/components/abu-progress.js';
import { themes, variants } from '../theme/theme.js';

const Progress = defineCE(
  class extends AbuProgress {
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

const progressTag = unsafeStatic(Progress);

const fixture = ({ theme = '', size = '', value = 50, max = 100 }) => {
  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  return html`
    <${progressTag}
      .value="${value}"
      .max="${max}"
      theme="${theme}"
      size="${size}"
    ></${progressTag}>
  `;
};

const tpl = themes.map(theme => {
  return html`
    ${fixture({ theme, value: 50 })} ${variants.map(size => fixture({ theme, size }))}
  `;
});

export default html`
  ${fixture({ value: 0 })} ${fixture({ value: 50 })} ${fixture({ value: 100 })} ${tpl}
`;
