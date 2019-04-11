import { ButtonElement } from '@aybolit/core';
import abwButtonStyles from '../styles/abw-button-css.js';

class AbwButton extends ButtonElement {
  static get styles() {
    return [super.styles, abwButtonStyles];
  }
}

customElements.define('abw-button', AbwButton);

export { AbwButton, abwButtonStyles };
