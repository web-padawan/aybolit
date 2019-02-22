import { ButtonElement } from '@aybolit/core';
import abwButtonStyles from './styles/abw-button-css.js';

export class AbwButton extends ButtonElement {
  static get is() {
    return 'abw-button';
  }

  static get styles() {
    return [super.styles, abwButtonStyles];
  }
}

customElements.define(AbwButton.is, AbwButton);
