import { SwitchElement } from '@aybolit/core';
import absSwitchStyles from './styles/abs-switch-css.js';

export class AbsSwitch extends SwitchElement {
  static get styles() {
    return [super.styles, absSwitchStyles];
  }
}

customElements.define('abs-switch', AbsSwitch);
