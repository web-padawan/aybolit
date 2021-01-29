import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLFooterNav } from '../footer-nav.stories';

export default {
  title: 'CXL UI/cxl-app-layout',
};

export const CXLAppLayout1cc = () => html`
  <cxl-app-layout id="container" layout="1c-c">
    ${CXLMarketingNav()}

    <article class="entry">
      <header class="entry-header">
        <label>Page</label>
        <h1 class="entry-title">Grow faster.</h1>
      </header>
      <div class="entry-content">
        <h2>
          The difference between high-growth and slow-growth companies is the skill sets they have
          to make it happen.
        </h2>
        <p>At CXL, we provide</p>
        <ul>
          <li>marketing training programs to people serious about their career,</li>
          <li>
            managed online revenue optimization & experimentation services to help mid-to-large
            companies accelerate growth.
          </li>
        </ul>
        <p>
          <vaadin-button theme="primary large"
            >Marketing training <iron-icon icon="lumo:angle-right" slot="suffix"></iron-icon
          ></vaadin-button>
          <vaadin-button theme="primary large contrast"
            >Managed services <iron-icon icon="lumo:angle-right" slot="suffix"></iron-icon
          ></vaadin-button>
        </p>
      </div>
    </article>

    ${CXLFooterNav()}
  </cxl-app-layout>
`;

CXLAppLayout1cc.storyName = '[layout=1c-c]';
