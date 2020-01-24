import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

export default {
  title: 'CXL UI|cxl-vaadin-accordion'
};

export const CxlVaadinAccordionThemeFaq = () => {
  return html`
    <style>
      .plural .entry-title {
        margin: 0;
      }
    </style>
    <h3>Frequently Asked Questions</h3>
    <cxl-vaadin-accordion class="archive archive-faq plural" theme="cxl-faq">
      <vaadin-accordion-panel theme="cxl-faq">
        <header class="entry-header" slot="summary">
          <h5 class="entry-title" itemprop="headline">
            <a href="#">How long should I have been working in UX?</a>
          </h5>
        </header>
        <div class="entry-summary" itemprop="description">
          <p>Foundations introduction copywriting here.</p>
        </div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel theme="cxl-faq">
        <header class="entry-header" slot="summary">
          <h5 class="entry-title no-anchor" itemprop="headline">
            <a href="#">What tools or programs should I be familiar with?</a>
          </h5>
        </header>
        <div class="entry-summary" itemprop="description">
          <p>
            This is the most important part of conversion optimization process. Conversion research
            done right ensures that you’ll be tackling the right issues which leads to more wins and
            bigger wins.
          </p>
        </div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel theme="cxl-faq">
        <header class="entry-header" slot="summary">
          <h5 class="entry-title no-anchor" itemprop="headline">
            <a href="#">What books or resources should I be familiar with?</a>
          </h5>
        </header>
        <div class="entry-summary" itemprop="description">
          <p>
            This is the most important part of conversion optimization process. Conversion research
            done right ensures that you’ll be tackling the right issues which leads to more wins and
            bigger wins.
          </p>
        </div>
      </vaadin-accordion-panel>
    </cxl-vaadin-accordion>
  `;
};

// @todo localStorage data panel?
CxlVaadinAccordionThemeFaq.story = {
  name: 'Theme: FAQ'
};
