import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import progressBaseStyles from './styles/progress-base-css.js';

export class ProgressElement extends LitElement {
  static get properties() {
    return {
      /**
       * Current progress value. Set to null, undefined
       * or empty string to set indeterminate state.
       */
      value: {
        type: Number
      },

      /**
       * Maximum bound to the native progress element.
       * Note: the minimum value is always 0.
       */
      max: {
        type: Number
      }
    };
  }

  static get styles() {
    return progressBaseStyles;
  }

  constructor() {
    super();
    this.value = 0;
    this.max = 1;
  }

  render() {
    let { value } = this;
    // make progress bar indeterminate
    if (value === null || value === '') {
      value = undefined;
    }
    return html`
      <progress value="${ifDefined(value)}" max="${this.max}"></progress>
    `;
  }
}
