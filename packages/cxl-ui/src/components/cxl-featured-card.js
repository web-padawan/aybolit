import { customElement, LitElement, html } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlFeaturedCardGlobalStyles from '../styles/global/cxl-featured-card-css.js';
import cxlFeaturedCardStyles from '../styles/cxl-featured-card-css.js';

@customElement('cxl-featured-card')
export class CXLFeaturedCard extends LitElement {
  static get styles() {
    return [cxlFeaturedCardStyles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlFeaturedCardGlobalStyles, {
      moduleId: 'cxl-featured-card-global'
    });
  }
}
