import { BadgeElement } from '@aybolit/core';
import absBadgeStyles from './styles/abs-badge-css.js';
import absThemeStyles from './styles/abs-theme-css.js';

export class AbsBadge extends BadgeElement {
  static get styles() {
    return [super.styles, absThemeStyles, absBadgeStyles];
  }
}

customElements.define('abs-badge', AbsBadge);
