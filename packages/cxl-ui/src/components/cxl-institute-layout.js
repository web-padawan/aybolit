/**
 * @todo implement primary action button.
 */
import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlInstituteLayoutStyles from '../styles/cxl-institute-layout-css.js';
import cxlInstituteLayoutGlobalStyles from '../styles/global/cxl-institute-layout-css.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu/src/vaadin-device-detector.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-progress-bar';

const ASIDE_LOCAL_STORAGE_KEY = 'cxl-institute-layout-aside-opened';

@customElement('cxl-institute-layout')
export class CXLInstituteLayout extends LitElement {
  @query('aside')
  asideElement;

  @property({ type: Boolean })
  get asideOpened() {
    this._asideOpened = JSON.parse(localStorage.getItem(ASIDE_LOCAL_STORAGE_KEY));

    return this._asideOpened === null || this._asideOpened;
  }

  set asideOpened(value) {
    localStorage.setItem(ASIDE_LOCAL_STORAGE_KEY, JSON.stringify(value));

    this.requestUpdate('asideOpened', this._asideOpened);
  }

  // vaadin-device-detector.
  @property({ type: Boolean, reflect: true })
  wide;

  static get styles() {
    return [cxlInstituteLayoutStyles];
  }

  render() {
    return html`
      <header role="banner" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
        <slot name="header"></slot>
      </header>

      <div id="main">
        <aside
          role="complementary"
          aria-label="Primary sidebar"
          itemscope="itemscope"
          itemtype="https://schema.org/WPSideBar"
          ?opened="${this.asideOpened}"
        >
          <slot name="sidebar"></slot>
        </aside>

        <main role="main" itemprop="mainContentOfPage">
          <vaadin-button
            aria-label="Toggle sidebar"
            theme="contrast icon"
            @click="${() => {
              this.asideOpened = !this.asideOpened;
            }}"
          >
            <iron-icon icon="lumo:angle-right"></iron-icon>
          </vaadin-button>
          <slot></slot>
        </main>
      </div>

      <footer role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
        <slot name="footer"></slot>
      </footer>

      <vaadin-device-detector
        @wide-changed="${e => {
          const { wide } = e.target;

          Promise.resolve().then(() => {
            this.wide = wide;
          });
        }}"
      ></vaadin-device-detector>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlInstituteLayoutGlobalStyles, {
      moduleId: 'cxl-institute-layout-global'
    });
  }
}
