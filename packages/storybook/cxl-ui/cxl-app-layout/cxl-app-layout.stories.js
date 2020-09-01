import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';

export default {
  title: 'CXL UI/cxl-app-layout'
};

export const CXLAppLayout = () => {
  return html`
    <cxl-app-layout id="container" theme="cxl-institute">
      <cxl-marketing-nav slot="header">
        <vaadin-tabs
          id="menu-primary-items"
          class="menu-items"
          orientation="vertical"
          selected="-1"
          theme="cxl-marketing-nav"
        >
          <vaadin-tab class="menu-item menu-item-logo menu-item-wide" theme="cxl-marketing-nav">
            <a href="https://conversionxl.com"
              ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon
            ></a>
          </vaadin-tab>
          <vaadin-tab
            theme="cxl-marketing-nav"
            id="menu-item-1820277"
            class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-1820277 menu-item-depth-0"
            aria-selected="false"
            role="tab"
            orientation="horizontal"
            tabindex="0"
          >
            <a>Search <iron-icon icon="lumo:search"></iron-icon></a>
          </vaadin-tab>
        </vaadin-tabs>
      </cxl-marketing-nav>
      <div slot="sidebar">
        <h3>Menu</h3>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </div>
      <div>
        <h2>Content</h2>
        <p>Lorem ipsum....</p>
      </div>
    </cxl-app-layout>
  `;
};

CXLAppLayout.storyName = 'cxl-app-layout';
