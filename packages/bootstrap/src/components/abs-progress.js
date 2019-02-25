import { ProgressElement } from '@aybolit/core';
import absProgressStyles from './styles/abs-progress-css.js';

export class AbsProgress extends ProgressElement {
  static get styles() {
    return [super.styles, absProgressStyles];
  }
}

customElements.define('abs-progress', AbsProgress);
