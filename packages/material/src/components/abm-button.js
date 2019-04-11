import { ButtonElement } from '@aybolit/core';
import abmButtonStyles from '../styles/abm-button-css.js';

export class AbmButton extends ButtonElement {
  static get styles() {
    return [super.styles, abmButtonStyles];
  }
}

customElements.define('abm-button', AbmButton);
