import { ButtonElement } from '@aybolit/core';
import abuButtonStyles from './styles/abu-button-css.js';

export class AbuButton extends ButtonElement {
  static get is() {
    return 'abu-button';
  }

  static get styles() {
    return [super.styles, abuButtonStyles];
  }
}

customElements.define(AbuButton.is, AbuButton);
