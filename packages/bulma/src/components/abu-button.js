import { ButtonElement } from '@aybolit/core';
import abuButtonStyles from '../styles/abu-button-css.js';
import abuThemeStyles from '../styles/abu-theme-css.js';

export class AbuButton extends ButtonElement {
  static get styles() {
    return [super.styles, abuThemeStyles, abuButtonStyles];
  }
}

customElements.define('abu-button', AbuButton);
