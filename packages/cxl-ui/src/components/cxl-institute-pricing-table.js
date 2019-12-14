import { LitElement, html, customElement, property, query } from 'lit-element';
import cxlInstitutePricingTableStyles from '../styles/cxl-institute-pricing-table-css.js';
import '@vaadin/vaadin-tabs';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';

@customElement('cxl-institute-pricing-table')
export class CXLInstitutePricingTableElement extends LitElement {

    @property({ type: Number })
    page = 0;

    static get styles(){
        return [cxlInstitutePricingTableStyles];
    }

    render() {
        return html`

            <vaadin-tabs selected="${this.page}" @selected-changed="${e => {
            this.page = e.detail.value}}">
              <vaadin-tab>Personal</vaadin-tab>
              <vaadin-tab>Teams</vaadin-tab>
              <vaadin-tab>Enterprise</vaadin-tab>
            </vaadin-tabs>

            <iron-pages selected="${this.page}">
              <page><h3 id="page-1">Personal</h3>Annual <paper-toggle-button checked></paper-toggle-button> Monthly</page>
              <page><h3 id="page-2">Teams</h3>Annual <paper-toggle-button checked></paper-toggle-button> Monthly</page>
              <page><h3 id="page-3">Enterprise</h3>Annual <paper-toggle-button checked></paper-toggle-button> Monthly</page>
            </iron-pages>
        `;
    }

}
