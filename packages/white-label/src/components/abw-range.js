import { RangeElement } from '@aybolit/core';
import abwRangeStyles from './styles/abw-range-css.js';

export class AbwRange extends RangeElement {
  static get styles() {
    return [super.styles, abwRangeStyles];
  }
}

customElements.define('abw-range', AbwRange);
