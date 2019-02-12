import { CheckboxElement } from '@aybolit/core';
import abwCheckboxStyles from './styles/abw-checkbox-css.js';

export class AbwCheckbox extends CheckboxElement {
  static get is() {
    return 'abw-checkbox';
  }

  static get styles() {
    return [super.styles, abwCheckboxStyles];
  }
}

customElements.define(AbwCheckbox.is, AbwCheckbox);
