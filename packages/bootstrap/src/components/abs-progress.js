import { ProgressElement } from '@aybolit/core';
import absProgressStyles from '../styles/abs-progress-css.js';
import absThemeStyles from '../styles/abs-theme-css.js';

export class AbsProgress extends ProgressElement {
  static get styles() {
    return [super.styles, absThemeStyles, absProgressStyles];
  }
}

customElements.define('abs-progress', AbsProgress);
