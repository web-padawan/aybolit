import { SwitchElement } from '@aybolit/core';
import abmSwitchStyles from './styles/abm-switch-css.js';

export class AbmSwitch extends SwitchElement {
  static get is() {
    return 'abm-switch';
  }

  static get styles() {
    return [super.styles, abmSwitchStyles];
  }
}

customElements.define(AbmSwitch.is, AbmSwitch);
