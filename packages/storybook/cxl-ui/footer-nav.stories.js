import { html } from 'lit-html';

export default {
  title: 'CXL UI/footer',
};

export const CXLFooterNav = () => html`
  <style>
    .site-footer .menu {
      background-color: var(--lumo-shade);
    }

    .site-footer .menu ul {
      list-style: none;
      padding: unset;
    }

    .site-footer .menu > .wrap {
      padding-bottom: var(--lumo-space-xl);
      padding-top: var(--lumo-space-xl);
    }
  </style>

  <footer
    id="footer"
    class="site-footer"
    role="contentinfo"
    itemscope="itemscope"
    itemtype="http://schema.org/WPFooter"
    slot="footer"
  >
    <nav class="menu">
      <div class="wrap">
        <ul class="menu-items">
          <li class="menu-item" style="color: var(--lumo-tint)">
            <a href="https://cxl.com"
              ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon
            ></a>
            ©2011-2021
          </li>
        </ul>
      </div>
    </nav>
  </footer>
`;

CXLFooterNav.storyName = 'nav';
