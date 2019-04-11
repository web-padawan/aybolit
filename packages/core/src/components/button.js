import { LitElement, html } from 'lit-element';
import { DelegateFocusMixin } from '../mixins/delegate-focus-mixin.js';
import buttonBaseStyles from '../styles/button-base-css.js';

export class ButtonElement extends DelegateFocusMixin(LitElement) {
  static get properties() {
    return {
      /**
       * Set to URL to render <a> element styled as button.
       */
      link: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return buttonBaseStyles;
  }

  render() {
    return html`
      ${this.link
        ? html`
            <a class="button" href="${this.link}" ?disabled="${this.disabled}">
              <slot></slot>
            </a>
          `
        : html`
            <button type="button" class="button" ?disabled="${this.disabled}" role="presentation">
              <slot></slot>
            </button>
          `}
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'button');
  }

  /**
   * @protected
   */
  get focusElement() {
    return this.shadowRoot.querySelector('.button');
  }
}
