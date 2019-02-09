import { SwitchElement } from '@aybolit/core';
import abwSwitchStyles from './styles/abw-switch-css.js';

export class AbwSwitch extends SwitchElement {
  static get is() {
    return 'abw-switch';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    return [super.styles, abwSwitchStyles];
  }
}

customElements.define(AbwSwitch.is, AbwSwitch);
