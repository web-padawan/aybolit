import { ProgressElement } from '@aybolit/core';
import abwProgressStyles from './styles/abw-progress-css.js';

export class AbwProgress extends ProgressElement {
  static get styles() {
    return [super.styles, abwProgressStyles];
  }
}

customElements.define('abw-progress', AbwProgress);
