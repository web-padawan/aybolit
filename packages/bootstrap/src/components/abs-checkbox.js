import { CheckboxElement } from '@aybolit/core';
import absCheckboxStyles from './styles/abs-checkbox-css.js';

export class AbsCheckbox extends CheckboxElement {
  static get styles() {
    return [super.styles, absCheckboxStyles];
  }
}

customElements.define('abs-checkbox', AbsCheckbox);
