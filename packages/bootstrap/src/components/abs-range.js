import { RangeElement } from '@aybolit/core';
import absRangeStyles from './styles/abs-range-css.js';

export class AbsRange extends RangeElement {
  static get is() {
    return 'abs-range';
  }

  static get styles() {
    return [super.styles, absRangeStyles];
  }
}

customElements.define(AbsRange.is, AbsRange);
