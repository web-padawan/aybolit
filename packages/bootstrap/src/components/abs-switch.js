import { SwitchElement } from '@aybolit/core';
import absSwitchStyles from './styles/abs-switch-css.js';

export class AbsSwitch extends SwitchElement {
  static get is() {
    return 'abs-switch';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    const [baseStyles] = super.styles;
    return [baseStyles, absSwitchStyles];
  }
}

customElements.define(AbsSwitch.is, AbsSwitch);
