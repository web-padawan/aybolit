import { CheckboxElement } from '@aybolit/core';
import absCheckboxStyles from './styles/abs-checkbox-css.js';
import absThemeStyles from './styles/abs-theme-css.js';

export class AbsCheckbox extends CheckboxElement {
  static get styles() {
    return [super.styles, absThemeStyles, absCheckboxStyles];
  }
}

customElements.define('abs-checkbox', AbsCheckbox);
