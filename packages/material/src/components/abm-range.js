import { RangeElement } from '@aybolit/core';
import abmRangeStyles from '../styles/abm-range-css.js';

export class AbmRange extends RangeElement {
  static get styles() {
    return [super.styles, abmRangeStyles];
  }
}

customElements.define('abm-range', AbmRange);
