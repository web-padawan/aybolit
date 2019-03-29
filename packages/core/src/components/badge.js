import { LitElement, html } from 'lit-element';
import badgeBaseStyles from './styles/badge-base-css.js';

export class BadgeElement extends LitElement {
  static get properties() {
    return {
      /**
       * Set to URL to render <a> element styled as badge.
       */
      link: {
        type: String,
        reflect: true
      }
    };
  }

  static get styles() {
    return badgeBaseStyles;
  }

  render() {
    return html`
      ${this.link
        ? html`
            <a class="badge" href="${this.link}">
              <slot></slot>
            </a>
          `
        : html`
            <span class="badge">
              <slot></slot>
            </span>
          `}
    `;
  }
}
