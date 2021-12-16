/**
 * @todo implement primary action button.
 */
import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import normalizeWheel from '@conversionxl/normalize-wheel';
import cxlAppLayoutStyles from '../styles/cxl-app-layout-css.js';
import cxlAppLayoutGlobalStyles from '../styles/global/cxl-app-layout-css.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-context-menu/src/vaadin-device-detector.js';

const ASIDE_LOCAL_STORAGE_KEY = 'cxl-app-layout-aside-opened';

@customElement('cxl-app-layout')
export class CXLAppLayoutElement extends LitElement {
  @query('aside')
  asideElement;

  @query('main')
  mainElement;

  @property({ type: Boolean })
  get asideOpened() {
    this._asideOpened = JSON.parse(localStorage.getItem(ASIDE_LOCAL_STORAGE_KEY));

    return (
      this._asideOpened === null ||
      (this.scroll !== 'panels' && this.layout === '2c-l') ||
      this._asideOpened
    );
  }

  set asideOpened(value) {
    localStorage.setItem(ASIDE_LOCAL_STORAGE_KEY, JSON.stringify(value));

    this.requestUpdate('asideOpened', this._asideOpened);
  }

  /**
   * 2-column layouts can scroll individual content panels, or document.
   *
   * @type {string}
   */
  @property({ reflect: true })
  scroll = 'document';

  /**
   * Configurable layout.
   *
   * @type {string}
   */
  @property()
  layout = '1c';

  // vaadin-device-detector.
  @property({ type: Boolean, reflect: true })
  wide;

  // Event listener for the wheel event to allow scrolling from outside of the main pane.
  _boundWheelEventListener;

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
        ${this.getAttribute('layout') === '2c-r' ? html`${asideElement}` : ''} ${mainElement}
        ${this.getAttribute('layout') === '2c-l' ? html`${asideElement}` : ''}
      </div>

      <footer role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
        <slot name="footer"></slot>
      </footer>

      <vaadin-device-detector
        @wide-changed="${(e) => {
          const { wide } = e.target;

          Promise.resolve().then(() => {
            this.wide = wide;
          });
        }}"
      ></vaadin-device-detector>
    `;
  }

  constructor() {
    super();
    this._boundWheelEventListener = this._onWheel.bind(this);
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('wide')) {
      if (this.wide && this.scroll === 'panels') {
        this.addEventListener('wheel', this._boundWheelEventListener, { passive: true });
      } else {
        this.removeEventListener('wheel', this._boundWheelEventListener);
      }
    }
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlAppLayoutGlobalStyles, {
      moduleId: 'cxl-app-layout-global',
    });
  }

  _onWheel(event) {
    if (event.target.tagName === 'CXL-APP-LAYOUT') {
      this.mainElement.scrollTop += normalizeWheel(event).pixelY;
    }
  }
}
