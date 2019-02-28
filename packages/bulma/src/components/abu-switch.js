import { SwitchElement } from '@aybolit/core';
import abuSwitchStyles from './styles/abu-switch-css.js';
import abuThemeStyles from './styles/abu-theme-css.js';

export class AbuSwitch extends SwitchElement {
  static get styles() {
    return [super.styles, abuThemeStyles, abuSwitchStyles];
  }
}

customElements.define('abu-switch', AbuSwitch);
