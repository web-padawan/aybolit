import { CheckboxElement } from '@aybolit/core';
import abmCheckboxStyles from './styles/abm-checkbox-css.js';

export class AbmCheckbox extends CheckboxElement {
  static get is() {
    return 'abm-checkbox';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    return [super.styles, abmCheckboxStyles];
  }
}

customElements.define(AbmCheckbox.is, AbmCheckbox);
