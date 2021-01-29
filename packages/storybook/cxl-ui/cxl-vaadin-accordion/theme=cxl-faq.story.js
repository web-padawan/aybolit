import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import faqData from './theme=cxl-faq.data.json';

export const CXLVaadinAccordionThemeFaq = () => html`
  <style>
    .plural .entry-title {
      margin: 0;
    }
  </style>
  <h3>Frequently Asked Questions</h3>
  <cxl-vaadin-accordion
    id="cxl-vaadin-accordion-26107"
    class="archive archive-faq plural"
    theme="cxl-faq"
  >
    ${faqData.map(
      (el) => html`
        <vaadin-accordion-panel
          id="${el.cxl_hybrid_attr_post['@attributes'].id}"
          class="${el.cxl_hybrid_attr_post['@attributes'].class}"
          theme="cxl-faq"
        >
          <header class="entry-header" slot="summary">
            <h5 class="entry-title" itemprop="headline">
              <a>${unsafeHTML(el.title.rendered)}</a>
            </h5>
          </header>
          <div class="entry-summary" itemprop="description">${unsafeHTML(el.content.rendered)}</div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-vaadin-accordion>
`;
