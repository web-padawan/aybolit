import { SwitchElement } from '@aybolit/core';
import abuSwitchStyles from './styles/abu-switch-css.js';

export class AbuSwitch extends SwitchElement {
  static get is() {
    return 'abu-switch';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    const [baseStyles] = super.styles;
    return [baseStyles, abuSwitchStyles];
  }
}

customElements.define(AbuSwitch.is, AbuSwitch);
