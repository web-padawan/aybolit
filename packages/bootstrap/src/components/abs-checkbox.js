import { CheckboxElement } from '@aybolit/core';
import absCheckboxStyles from './styles/abs-checkbox-css.js';

export class AbsCheckbox extends CheckboxElement {
  static get is() {
    return 'abs-checkbox';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    return [super.styles, absCheckboxStyles];
  }
}

customElements.define(AbsCheckbox.is, AbsCheckbox);
