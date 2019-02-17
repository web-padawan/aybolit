import { ButtonElement } from '@aybolit/core';
import absButtonStyles from './styles/abs-button-css.js';

export class AbsButton extends ButtonElement {
  static get is() {
    return 'abs-button';
  }

  static get styles() {
    return [super.styles, absButtonStyles];
  }
}

customElements.define(AbsButton.is, AbsButton);
