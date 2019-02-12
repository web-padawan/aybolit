import { CheckboxElement } from '@aybolit/core';
import abuCheckboxStyles from './styles/abu-checkbox-css.js';

export class AbuCheckbox extends CheckboxElement {
  static get is() {
    return 'abu-checkbox';
  }

  static get styles() {
    return [super.styles, abuCheckboxStyles];
  }
}

customElements.define(AbuCheckbox.is, AbuCheckbox);
