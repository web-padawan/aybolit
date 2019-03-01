import { SwitchElement } from '@aybolit/core';
import absSwitchStyles from './styles/abs-switch-css.js';
import absThemeStyles from './styles/abs-theme-css.js';

export class AbsSwitch extends SwitchElement {
  static get styles() {
    return [super.styles, absThemeStyles, absSwitchStyles];
  }
}

customElements.define('abs-switch', AbsSwitch);
