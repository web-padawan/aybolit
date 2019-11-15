import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlMarketingNavStyles from '../styles/cxl-marketing-nav-css.js';
import cxlMarketingNavGlobalStyles from '../styles/global/cxl-marketing-nav-css.js';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-context-menu';

@customElement('cxl-marketing-nav')
export class CXLMarketingNavElement extends LitElement {
  @property({ type: Object })
  contextMenuItems;

  @property({ type: Boolean, reflect: true })
  fixed = false;

  @query('.menu-items')
  menuGlobalItemsElement;

  @property({ type: Object })
  menuItemsElement;

  @property({ type: Number })
  menuGlobalItemsSelectedIdx = -1;

  @property({ type: Boolean, reflect: true })
  wide;

  static get styles() {
    return [cxlMarketingNavStyles];
  }

  render() {
    return html`
      <nav>
        <vaadin-tabs
          id="menu-global-items"
          class="menu-items"
          selected="${this.menuGlobalItemsSelectedIdx}"
          orientation="horizontal"
          theme="cxl-marketing-nav hide-scroll-buttons minimal"
          @selected-changed="${e => {
            this.menuGlobalItemsSelectedIdx = e.detail.value;
          }}"
          @click="${this._menuGlobalItemsClick}"
        >
          <vaadin-tab class="menu-item menu-item-logo" theme="cxl-marketing-nav">
            <a href="https://conversionxl.com"
              ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-l, 48px);"></iron-icon
            ></a>
          </vaadin-tab>
          <vaadin-tab
            class="menu-item menu-item-has-children menu-item:not-wide"
            theme="cxl-marketing-nav"
          >
            <a href="https://conversionxl.com/about/"
              >About <iron-icon class="menu-item:not-wide" icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu open-on="click" class="sub-menu">
              <template>
                <vaadin-context-menu-list-box class="vaadin-menu-list-box" role="menu">
                  <vaadin-context-menu-item class="vaadin-menu-item" role="menuitem"
                    ><a href="https://conversionxl.com/about/"
                      >About CXL</a
                    ></vaadin-context-menu-item
                  >
                  <vaadin-context-menu-item class="vaadin-menu-item" role="menuitem"
                    ><a href="https://conversionxl.com/institute/"
                      >CXL Institute</a
                    ></vaadin-context-menu-item
                  >
                  <vaadin-context-menu-item class="vaadin-menu-item" role="menuitem"
                    ><a href="https://conversionxl.com/agency/"
                      >Conversion optimization services</a
                    ></vaadin-context-menu-item
                  >
                  <vaadin-context-menu-item class="vaadin-menu-item" role="menuitem"
                    ><a href="https://conversionxl.com/agency/case-studies/"
                      >Agency case studies</a
                    ></vaadin-context-menu-item
                  >
                  <vaadin-context-menu-item class="vaadin-menu-item" role="menuitem"
                    ><a href="https://conversionxl.com/blog/">Blog</a></vaadin-context-menu-item
                  >
                  <vaadin-context-menu-item class="vaadin-menu-item" role="menuitem"
                    ><a href="https://conversionxl.com/live/"
                      >CXL Live 2020
                      <iron-icon
                        icon="cxl:live"
                        style="color: var(--lumo-primary-color)"
                      ></iron-icon></a
                  ></vaadin-context-menu-item>
                </vaadin-context-menu-list-box>
              </template>
            </vaadin-context-menu>
          </vaadin-tab>
          <vaadin-tab class="menu-item menu-item:wide" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/institute/">Institute</a></vaadin-tab
          >
          <vaadin-tab class="menu-item menu-item:wide" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/agency/"
              >Conversion optimization services</a
            ></vaadin-tab
          >
          <vaadin-tab class="menu-item menu-item:wide" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/agency/case-studies/"
              >Agency case studies</a
            ></vaadin-tab
          >
          <vaadin-tab class="menu-item menu-item:wide" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/blog/">Blog</a></vaadin-tab
          >
          <vaadin-tab class="menu-item menu-item:wide" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/live/"
              >CXL Live 2020
              <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon></a
          ></vaadin-tab>
          <vaadin-tab
            class="menu-item menu-item-split-nav menu-item-has-children menu-item-search"
            theme="cxl-marketing-nav"
          >
            <a>Search</a>
            <vaadin-context-menu open-on="click" theme="cxl-marketing-nav">
              <iron-icon icon="lumo:search"></iron-icon>
            </vaadin-context-menu>
          </vaadin-tab>
          <vaadin-tab
            class="menu-item menu-item:not-wide menu-item-menu-toggle"
            theme="cxl-marketing-nav"
          >
            <a
              >Menu <iron-icon icon="lumo:menu"></iron-icon><iron-icon icon="lumo:cross"></iron-icon
            ></a>
          </vaadin-tab>
        </vaadin-tabs>

        <slot></slot>
        <vaadin-device-detector
          @wide-changed="${e => {
            this.wide = e.target.wide;
          }}"
        ></vaadin-device-detector>
      </nav>
    `;
  }

  firstUpdated(changedProperties) {
    /**
     * Global styles.
     *
     * @todo Helper function usable across components.
     */
    const tmpl = document.createElement('template');
    tmpl.innerHTML = `<style id="cxl-marketing-nav-global">${cxlMarketingNavGlobalStyles}</style>`;
    document.head.appendChild(tmpl.content);

    /**
     * Configure context menu trigger on main link click.
     *
     * @see https://github.com/vaadin/vaadin-context-menu/blob/v4.3.12/src/vaadin-context-menu.html#L172
     * @see https://www.nngroup.com/articles/split-buttons-navigation/
     */
    const menuItemListeners = [
      ...this.shadowRoot.querySelectorAll('.menu-item'),
      ...this.querySelectorAll('.menu-item')
    ];

    menuItemListeners.forEach(menuItem => {
      const contextMenu = menuItem.querySelector('vaadin-context-menu');

      if (contextMenu) {
        contextMenu.listenOn = menuItem;
      }
    });

    /**
     * Configure .menu-item-search keydown listeners.
     *
     * `<vaadin-context-menu-item>` interferes with form input.
     *
     * @see https://github.com/vaadin/vaadin-item/blob/v2.1.1/src/vaadin-item-mixin.html#L136
    const menuItemSearchContextMenu = this.querySelector('.menu-item-search > vaadin-context-menu');

    menuItemSearchContextMenu.addEventListener('opened-changed', ee => {
      const searchForm = ee.target.$.overlay.querySelector('#search-form');

      searchForm.addEventListener('keydown', ef => {
        // Allow Esc.
        if (ef.keyCode !== 27) {
          ef.stopPropagation()
        }
      });
    }, { once: true });
     */

    /**
     * Decide `<vaadin-tabs>` initial orientation.
     */
    this.menuItemsElement = this.querySelector('.menu-items');
    this._updatedWide();

    super.firstUpdated(changedProperties);
  }

  updated(changedProps) {
    if (changedProps.has('contextMenuItems')) {
      this._updatedContextMenuItems();
    }

    if (changedProps.has('wide')) {
      this._updatedWide();
    }

    super.updated(changedProps);
  }

  /**
   * Populate children `<vaadin-context-menu>` elements.
   *
   * @private
   * @todo Links cannot be sub-menu hosts?
   */
  _updatedContextMenuItems() {
    this.contextMenuItems.forEach(menuItem => {
      if (! menuItem.children) {
        return;
      }

      const contextMenu = this.querySelector(
        `vaadin-tab#menu-item-${menuItem.id} > vaadin-context-menu`
      );

      /**
       * Support `{ component: a }`.
       *
       * @see https://github.com/vaadin/vaadin-context-menu/issues/254
       */
      const _contextMenuItems = menuItem.children;

      _contextMenuItems.forEach((item, i, self) => {
        if (item.component === 'a') {
          const menuItem = document.createElement('vaadin-context-menu-item');
          const link = document.createElement('a');

          link.href = item.href;
          link.text = item.text;

          menuItem.appendChild(link);

          // eslint-disable-next-line no-param-reassign
          self[i] = { component: menuItem };
        }
      });

      // Populate.
      contextMenu.items = _contextMenuItems;

      // Prevent close on upstream events: clicks, keydown, etc
      contextMenu.addEventListener('item-selected', e => {
        e.stopImmediatePropagation();
      });
    });
  }

  /**
   * Re-orient menu bars.
   *
   * @see https://github.com/vaadin/vaadin-context-menu/blob/v4.3.12/src/vaadin-device-detector.html#L12
   * @see https://github.com/vaadin/vaadin-context-menu/issues/253
   * @todo refactor w/ `<cxl-icon-nav>`?
   */
  _updatedWide() {
    let orientation = 'vertical';

    if (this.wide) {
      orientation = 'horizontal';
    }

    this.menuItemsElement.setAttribute('orientation', orientation);
    this.menuItemsElement.setAttribute('wide', this.wide);
    this.menuGlobalItemsElement.setAttribute('wide', this.wide);
  }

  _menuGlobalItemsClick(e) {
    if (this.menuGlobalItemsSelectedIdx !== -1) {
      if (this.menuGlobalItemsSelectedIdx === e.currentTarget.selected) {
        e.currentTarget.selected = -1;
        e.stopImmediatePropagation();
      }
    }
  }
}
