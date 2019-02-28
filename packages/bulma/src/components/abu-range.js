import { RangeElement } from '@aybolit/core';
import abuRangeStyles from './styles/abu-range-css.js';
import abuThemeStyles from './styles/abu-theme-css.js';

export class AbuRange extends RangeElement {
  static get styles() {
    return [super.styles, abuThemeStyles, abuRangeStyles];
  }
}

customElements.define('abu-range', AbuRange);
