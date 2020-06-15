/**
 * @todo implement primary action button.
 */
import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlAppLayoutStyles from '../styles/cxl-app-layout-css.js';
import cxlAppLayoutGlobalStyles from '../styles/global/cxl-app-layout-css.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu/src/vaadin-device-detector.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-progress-bar';

@customElement('cxl-app-layout')
export class CXLAppLayout extends LitElement {
  @query('aside')
  asideElement;

  @property({ type: String, attribute: 'aside-local-storage-key' })
  _asideLocalStorageKey = `cxl-app-layout-aside-opened--${window.location.pathname}`;

  @property({ type: Boolean })
  get asideOpened() {
    this._asideOpened = JSON.parse(localStorage.getItem(this._asideLocalStorageKey));

    return this._asideOpened === null || this._asideOpened;
  }

  set asideOpened(value) {
    localStorage.setItem(this._asideLocalStorageKey, JSON.stringify(value));

    this.requestUpdate('asideOpened', this._asideOpened);
  }

  // vaadin-device-detector.
  @property({ type: Boolean, reflect: true })
  wide;

  @property({ type: Boolean, attribute: false })
  _twoColumn;

  @property({ type: Boolean, attribute: false })
  _rightSideMain;

  @property({ type: String })
  get theme() {
    return this._theme;
  }

  set theme(value) {
    if (typeof value !== 'string') return;
    switch (value) {
      case '2c-l':
        this._twoColumn = true;
        this._rightSideMain = true;
        break;
      case 'cxl-institute':
        this._twoColumn = true;
        this._rightSideMain = false;
        break;
      default:
        this._twoColumn = false;
        break;
    }
    this._theme = value;
  }

  static get styles() {
    return [cxlAppLayoutStyles];
  }

  render() {
    const asideElement = html`
      <aside
        role="complementary"
        aria-label="Primary sidebar"
        itemscope="itemscope"
        itemtype="https://schema.org/WPSideBar"
        ?opened="${this.asideOpened}"
      >
        <vaadin-button
          aria-label="Toggle sidebar"
          class="aside-toggle-button"
          theme="contrast icon"
          @click="${() => {
            this.asideOpened = !this.asideOpened;
          }}"
        >
          <iron-icon icon="lumo:angle-right"></iron-icon>
        </vaadin-button>
        <slot name="sidebar"></slot>
      </aside>
    `;

    const mainElement = html`
      <main role="main" itemprop="mainContentOfPage">
        <slot></slot>
      </main>
    `;

    return html`
      <header role="banner" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
        <slot name="header"></slot>
      </header>

      <div id="main">
        ${this._renderMainComponents(mainElement, asideElement)}
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

  _renderMainComponents(mainElement, asideElement) {
    if (!this._twoColumn)
      return html`
        ${mainElement}
      `;

    return this._rightSideMain
      ? html`
          ${asideElement} ${mainElement}
        `
      : html`
          ${mainElement} ${asideElement}
        `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlAppLayoutGlobalStyles, {
      moduleId: 'cxl-app-layout-global'
    });
  }
}
