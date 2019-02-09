import { SwitchElement } from '@aybolit/core';
import abmSwitchStyles from './styles/abm-switch-css.js';

export class AbmSwitch extends SwitchElement {
  static get is() {
    return 'abm-switch';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    const [baseStyles] = super.styles;
    return [baseStyles, abmSwitchStyles];
  }
}

customElements.define(AbmSwitch.is, AbmSwitch);
