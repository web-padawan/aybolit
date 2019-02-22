import { SwitchElement } from '@aybolit/core';
import abwSwitchStyles from './styles/abw-switch-css.js';

export class AbwSwitch extends SwitchElement {
  static get styles() {
    return [super.styles, abwSwitchStyles];
  }
}

customElements.define('abw-switch', AbwSwitch);
