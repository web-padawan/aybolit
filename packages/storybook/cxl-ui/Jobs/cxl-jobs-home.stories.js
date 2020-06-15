import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';

export default {
  title: 'CXL UI|Jobs'
};

export const CxlAppLayout = () => {
  return html`
    <cxl-app-layout id="container" theme="cxl-jobs-home">
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
          </vaadin-tab> </vaadin-tabs
      ></cxl-marketing-nav>

      <article class="entry">
        <header class="entry-header">
          <h1 class="entry-title">
            <em>C</em><span style="color: var(--lumo-primary-color)">XL</span> jobs
          </h1>
          <div class="entry-byline">
            <p class="statement">
              CXL Jobs is the world's largest data-based marketers' community on the web to find
              marketing jobs and people who value a data-bsed approach.
            </p>
          </div>
        </header>

        <div class="entry-content" itemprop="text">
          <vaadin-tabs>
            <vaadin-tab>Job offers</vaadin-tab>
            <vaadin-tab>Find Employees</vaadin-tab>
          </vaadin-tabs>
        </div>
      </article>
    </cxl-app-layout>
  `;
};

CxlAppLayout.story = {
  name: 'cxl-jobs-home'
};
