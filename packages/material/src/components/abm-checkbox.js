import { CheckboxElement } from '@aybolit/core';
import abmCheckboxStyles from '../styles/abm-checkbox-css.js';

export class AbmCheckbox extends CheckboxElement {
  static get styles() {
    return [super.styles, abmCheckboxStyles];
  }
}

customElements.define('abm-checkbox', AbmCheckbox);
