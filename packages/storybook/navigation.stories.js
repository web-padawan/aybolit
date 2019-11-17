import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import contextMenuItems from './navigation.data.json';

export default {
  title: 'CXL Navigation'
};

export const CxlMarketingNav = () => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');

    cxlMarketingNavElement.contextMenuItems = contextMenuItems;
  }, []);

  return html`
    <cxl-marketing-nav id="menu-primary" class="menu menu-primary" role="navigation">
      <template id="cxl-marketing-nav-search-form-template">
        <vaadin-context-menu-item class="menu-item-search">
          <form id="search-form" role="search" method="get" class="search-form" action="https://conversionxl.com/institute/?s=">
              <label for="search-input">Search <em style="color: var(--lumo-primary-color);">C</em>XL Institute:</label>
              <input id="search-input" type="search" class="search-field" value="" name="s">
              <vaadin-button type="submit" class="search-submit" aria-label="Search" theme="icon" onclick="document.getElementById('search-form').submit();">
                <iron-icon icon="lumo:angle-right"></iron-icon>
              </vaadin-button>
          </form>
        </vaadin-context-menu-item>
      </template>

      <vaadin-tabs
        id="menu-primary-items"
        class="menu-items"
        orientation="vertical"
        selected="-1"
        theme="cxl-marketing-nav"
      >
        <vaadin-tab
          id="menu-item-35"
          class="menu-item menu-item-35 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a href="https://conversionxl.com/institute/dashboard/"
            >My dashboard <iron-icon icon="lumo:dropdown"></iron-icon
          ></a>
          <vaadin-context-menu open-on="click" class="sub-menu"></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab
          id="menu-item-36"
          class="menu-item menu-item-36 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a
            href="https://conversionxl.com/institute/online-courses/?_categories=minidegree-programs"
            >Minidegrees <iron-icon icon="lumo:dropdown"></iron-icon
          ></a>
          <vaadin-context-menu open-on="click" class="sub-menu"></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab
          id="menu-item-37"
          class="menu-item menu-item-37 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a href="https://conversionxl.com/institute/online-courses/"
            >Online courses <iron-icon icon="lumo:dropdown"></iron-icon
          ></a>
          <vaadin-context-menu open-on="click" class="sub-menu"></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
          ><a href="https://conversionxl.com/institute/upcoming-courses/"
            >Upcoming courses</a
          ></vaadin-tab
        >
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
          ><a href="https://conversionxl.com/institute/media/">Event videos</a></vaadin-tab
        >
        <vaadin-tab class="menu-item menu-item-split-nav" theme="cxl-marketing-nav"
          ><a href="https://conversionxl.com/institute/my-account/teams/"
            ><iron-icon icon="lumo:plus"></iron-icon> Invite team</a
          ></vaadin-tab
        >
        <vaadin-tab id="menu-item-41" class="menu-item menu-item-has-children" theme="cxl-marketing-nav"
          ><a href="https://conversionxl.com/institute/my-account/"
            ><iron-icon icon="lumo:user"></iron-icon> My account <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu open-on="click" class="sub-menu"></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav"><a>Help</a></vaadin-tab>
      </vaadin-tabs>
    </cxl-marketing-nav>

    <p>We need to test context menu items vs body links styling, so here's a <a href="https://cxl.com">link somewhere like cxl.com</a>.</p>
    <p><a href="https://cxl.com">Another link</a> for good measure.</p>
  `;
};

CxlMarketingNav.story = {
  name: 'cxl-marketing-nav'
};
