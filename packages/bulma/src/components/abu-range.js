import { RangeElement } from '@aybolit/core';
import abuRangeStyles from './styles/abu-range-css.js';

export class AbuRange extends RangeElement {
  static get styles() {
    return [super.styles, abuRangeStyles];
  }
}

customElements.define('abu-range', AbuRange);
