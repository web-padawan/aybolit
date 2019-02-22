import { RangeElement } from '@aybolit/core';
import absRangeStyles from './styles/abs-range-css.js';

export class AbsRange extends RangeElement {
  static get styles() {
    return [super.styles, absRangeStyles];
  }
}

customElements.define('abs-range', AbsRange);
