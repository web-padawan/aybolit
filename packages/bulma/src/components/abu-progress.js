import { ProgressElement } from '@aybolit/core';
import abuProgressStyles from './styles/abu-progress-css.js';
import abuThemeStyles from './styles/abu-theme-css.js';

export class AbuProgress extends ProgressElement {
  static get styles() {
    return [super.styles, abuThemeStyles, abuProgressStyles];
  }
}

customElements.define('abu-progress', AbuProgress);
