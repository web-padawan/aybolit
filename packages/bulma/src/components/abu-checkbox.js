import { CheckboxElement } from '@aybolit/core';
import abuCheckboxStyles from '../styles/abu-checkbox-css.js';
import abuThemeStyles from '../styles/abu-theme-css.js';

export class AbuCheckbox extends CheckboxElement {
  static get styles() {
    return [super.styles, abuThemeStyles, abuCheckboxStyles];
  }
}

customElements.define('abu-checkbox', AbuCheckbox);
