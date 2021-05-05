import { customElement, LitElement, html } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlCardGlobalStyles from '../styles/global/cxl-card-css.js';
import cxlCardStyles from '../styles/cxl-card-css.js';

@customElement('cxl-card')
export class CXLCardElement extends LitElement {
  static get styles() {
    return [cxlCardStyles];
  }

  render() {
    return html` <slot></slot> `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlCardGlobalStyles, {
      moduleId: 'cxl-card-global',
    });
  }
}
