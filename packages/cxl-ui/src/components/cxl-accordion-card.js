import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { AccordionPanelElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion-panel';

@customElement('cxl-accordion-card')
export class CXLAccordionCard extends AccordionPanelElement {
  static get is() {
    return 'cxl-accordion-card';
  }
}
