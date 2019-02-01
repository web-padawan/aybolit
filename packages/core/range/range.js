import { LitElement, html } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import rangeBaseStyles from './styles/range-base-css.js';
import rangeMinimalStyles from './styles/range-minimal-css.js';

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

export class RangeElement extends LitElement {
  static get properties() {
    return {
      value: {
        type: Number
      },

      min: {
        type: Number
      },

      max: {
        type: Number
      },

      step: {
        type: Number
      },

      disabled: {
        type: Boolean
      }
    };
  }

  static get styles() {
    return [rangeBaseStyles, rangeMinimalStyles];
  }

  constructor() {
    super();
    this.value = 0;
    this.min = 0;
    this.max = 100;
    this.step = 1;
  }

  render() {
    return html`
      <input
        type="range"
        class="range"
        .value="${this.value}"
        min="${ifDefined(this.min)}"
        max="${ifDefined(this.max)}"
        step="${ifDefined(this.step)}"
        ?disabled="${this.disabled}"
        aria-valuemin="${ifDefined(this.min)}"
        aria-valuemax="${ifDefined(this.max)}"
        aria-valuenow="${this.value}"
        @input="${this._onInput}"
        @change="${this._onChange}"
      />
    `;
  }

  update(props) {
    if (props.has('value')) {
      if (isNumeric(this.value)) {
        if (isNumeric(this.min) && this.value < this.min) {
          this.value = this.min;
        } else if (isNumeric(this.max) && this.value > this.max) {
          this.value = this.max;
        }
      } else {
        this.value = (this.max - this.min) / 2 + this.min;
      }
    }

    if (props.has('min')) {
      if (!isNumeric(this.min)) {
        this.min = 0;
      }
    }

    if (props.has('max')) {
      if (!isNumeric(this.max)) {
        this.max = 100;
      }
    }

    if (props.has('step')) {
      if (!isNumeric(this.step)) {
        this.step = 1;
      }
    }

    super.update(props);
  }

  updated(props) {
    super.updated(props);

    if (props.has('value')) {
      this.dispatchEvent(
        new CustomEvent('value-changed', {
          detail: {
            value: this.value
          }
        })
      );
    }
  }

  _onChange(e) {
    // In the Shadow DOM, the `change` event is not leaked
    // into the ancestor tree, so we must do this manually.
    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable
    });
    this.dispatchEvent(changeEvent);
  }

  _onInput(e) {
    this.value = Number(e.target.value);
  }
}
