import { RangeElement } from '@aybolit/core';
import abwRangeStyles from './styles/abw-range-css.js';

export class AbwRange extends RangeElement {
  static get is() {
    return 'abw-range';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    return [super.styles, abwRangeStyles];
  }
}

customElements.define(AbwRange.is, AbwRange);
