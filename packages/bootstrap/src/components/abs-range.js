import { RangeElement } from '@aybolit/core';
import absRangeStyles from '../styles/abs-range-css.js';
import absThemeStyles from '../styles/abs-theme-css.js';

export class AbsRange extends RangeElement {
  static get styles() {
    return [super.styles, absThemeStyles, absRangeStyles];
  }
}

customElements.define('abs-range', AbsRange);
