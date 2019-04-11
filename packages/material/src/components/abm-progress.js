import { ProgressElement } from '@aybolit/core';
import abmProgressStyles from '../styles/abm-progress-css.js';

export class AbmProgress extends ProgressElement {
  static get styles() {
    return [super.styles, abmProgressStyles];
  }
}

customElements.define('abm-progress', AbmProgress);
