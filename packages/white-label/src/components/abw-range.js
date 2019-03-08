import { RangeElement } from '@aybolit/core';
import abwRangeStyles from './styles/abw-range-css.js';

class AbwRange extends RangeElement {
  static get styles() {
    return [super.styles, abwRangeStyles];
  }
}

customElements.define('abw-range', AbwRange);

export { AbwRange, abwRangeStyles };
