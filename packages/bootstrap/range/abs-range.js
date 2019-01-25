import { RangeElement } from '@aybolit/core';
import absRangeStyles from './styles/abs-range-css.js';

export class AbsRange extends RangeElement {

  static get is() {
    return 'abs-range';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    return absRangeStyles;
  }
}

customElements.define(AbsRange.is, AbsRange);
