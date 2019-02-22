import { SwitchElement } from '@aybolit/core';
import abuSwitchStyles from './styles/abu-switch-css.js';

export class AbuSwitch extends SwitchElement {
  static get styles() {
    return [super.styles, abuSwitchStyles];
  }
}

customElements.define('abu-switch', AbuSwitch);
