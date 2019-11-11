import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav';

export default {
  title: 'CXL Navigation'
};

export const CxlMarketingNav = () => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const homeUrl = 'https://conversionxl.com/institute';
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');

    cxlMarketingNavElement.contextMenuItems = {
      '1002': [
        { component: 'a', href: `${homeUrl}/dashboard/`, text: 'See my dashboard' },
        { text: 'Edit my roadmap' },
        { text: 'Edit team roadmap' },
        { text: 'See team progress' }
      ],
      '1003': [
        {
          component: 'a',
          href: `${homeUrl}/online-courses/?_categories=minidegree-programs`,
          text: 'See all minidegrees'
        },
        { text: 'Conversion optimization' },
        { text: 'Digital psychology and persuasion' },
        { text: 'Growth marketing' },
        { text: 'Digital analytics' }
      ],
      '1004': [
        { component: 'a', href: `${homeUrl}/online-courses/`, text: 'See all online courses' },
        {
          text: 'CRO & UX',
          children: [
            { text: 'A/B Testing' },
            { text: 'Conversion optimization audits' },
            { text: 'Experimentation analysis' },
            { text: 'Landing page optimization' },
            { text: 'Sales copywriting & product messaging' },
            { text: 'Statistics for A/B testing' }
          ]
        },
        {
          text: 'Analytics',
          children: [
            { text: 'Adobe Analytics - beginner' },
            { text: 'Google Analytics - beginner' },
            { text: 'Google Analytics - intermediate' },
            { text: 'Google Tag Manager - beginner' },
            { text: 'Google Tag Manager - intermediate' },
            { text: 'Google Tag Manager - advanced' },
            { text: 'Product analytics' }
          ]
        },
        {
          text: 'Marketing',
          children: [
            { text: 'Account based marketing' },
            { text: 'Advanced AI for marketers' },
            { text: 'Content strategy - B2B' },
            { text: 'Data-driven influencer marketing' },
            { text: 'Facebook ads' },
            { text: 'Google Ads - intermediate' },
            { text: 'Google Ads - maximizing audiences' },
            { text: 'LinkedIn advertising' },
            { text: 'Marketing management' },
            { text: 'Marketing tech stack' },
            { text: 'Product marketing' },
            { text: 'Project management for marketers' },
            { text: 'Retention for subscription products' },
            { text: 'SEO - editorial calendar' },
            { text: 'Technical SEO' },
            { text: 'User-centric marketing' },
            { text: 'YouTube ads' }
          ]
        }
      ]
    };
  }, []);

  return html`
    <cxl-marketing-nav id="menu-primary" class="menu menu-primary" role="navigation">
      <vaadin-tabs
        id="menu-primary-items"
        class="menu-items"
        orientation="vertical"
        selected="-1"
        theme="cxl-marketing-nav"
      >
        <vaadin-tab
          id="menu-item-1002"
          class="menu-item menu-item-1002 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a href="https://conversionxl.com/institute/dashboard/"
            >My dashboard <iron-icon icon="lumo:dropdown"></iron-icon
          ></a>
          <vaadin-context-menu open-on="click" class="sub-menu"></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab
          id="menu-item-1003"
          class="menu-item menu-item-1003 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a
            href="https://conversionxl.com/institute/online-courses/?_categories=minidegree-programs"
            >Minidegrees <iron-icon icon="lumo:dropdown"></iron-icon
          ></a>
          <vaadin-context-menu open-on="click" class="sub-menu"></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab
          id="menu-item-1004"
          class="menu-item menu-item-1004 menu-item-has-children"
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
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
          ><a href="https://conversionxl.com/institute/my-account/"
            ><iron-icon icon="lumo:user"></iron-icon> My account</a
          ></vaadin-tab
        >
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav"><a>Help</a></vaadin-tab>
      </vaadin-tabs>
    </cxl-marketing-nav>
  `;
};

CxlMarketingNav.story = {
  name: 'cxl-marketing-nav'
};
