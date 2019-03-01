import { ButtonElement } from '@aybolit/core';
import absButtonStyles from './styles/abs-button-css.js';
import absThemeStyles from './styles/abs-theme-css.js';

export class AbsButton extends ButtonElement {
  static get styles() {
    return [super.styles, absThemeStyles, absButtonStyles];
  }
}

customElements.define('abs-button', AbsButton);
