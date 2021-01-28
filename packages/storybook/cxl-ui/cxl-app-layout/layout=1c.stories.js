import { html } from 'lit-html';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLFooterNav } from '../footer-nav.stories';

export default {
  decorators: [withKnobs],
  title: 'CXL UI/cxl-app-layout'
};

export const CXLAppLayout = () => {
  const backgroundColor = text('Background color', 'var(--lumo-shade-5pct)');
  const hasWave = boolean('Has wave bottom?', true);

  return html`
    <style>
      .entry-content ul {
        font-family: var(--cxl-lumo-font-secondary);
      }
    </style>

    <cxl-app-layout id="container" layout="1c">
      ${CXLMarketingNav()}

      <article class="entry">
        <div class="entry-content">
          <cxl-section
            class="alignwide has-background ${hasWave ? 'has-wave' : ''}"
            style="${backgroundColor ? `background-color: ${backgroundColor}` : ''}"
          >
            <h1 class="entry-title">Grow faster.</h1>
            <h2>
              The difference between high-growth and slow-growth companies is the skill sets they
              have to make it happen.
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
          </cxl-section>
          <cxl-section>
            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>
            <p>
              Getting results you want with conversion optimization and experimentation is all about
              knowing what to do. It’s a field where you need to know a lot about a lot, and this
              program contains it all.
            </p>
            <p>After completing it you will</p>
            <ul>
              <li>improve your skills in conversion optimization, UX, and web analytics,</li>
              <li>understand what works on websites, and what doesn't,</li>
              <li>develop better A/B tests that win more often.</li>
            </ul>
          </cxl-section>
        </div>
      </article>

      ${CXLFooterNav()}
    </cxl-app-layout>
  `;
};

CXLAppLayout.storyName = '[layout=1c] (default)';
