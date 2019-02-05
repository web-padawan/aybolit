import { RangeElement } from '@aybolit/core';
import abmRangeStyles from './styles/abm-range-css.js';

export class AbmRange extends RangeElement {
  static get is() {
    return 'abm-range';
  }

  static get version() {
    return '0.0.0';
  }

  static get styles() {
    const [baseStyles] = super.styles;
    return [baseStyles, abmRangeStyles];
  }
}

customElements.define(AbmRange.is, AbmRange);
