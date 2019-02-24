import { ProgressElement } from '@aybolit/core';
import abuProgressStyles from './styles/abu-progress-css.js';

export class AbuProgress extends ProgressElement {
  static get styles() {
    return [super.styles, abuProgressStyles];
  }
}

customElements.define('abu-progress', AbuProgress);
