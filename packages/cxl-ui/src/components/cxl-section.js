import { LitElement, customElement, html, svg } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlSectionStyles from '../styles/cxl-section-css';

@customElement('cxl-section')
export class CXLSectionElement extends LitElement {
  static get styles() {
    return [cxlSectionStyles];
  }

  render() {
    return html`
      <section class="wrap">
        <slot></slot>
      </section>
      ${this.classList.contains('has-wave')
        ? svg`
        <svg id="wave" xmlns="http://www.w3.org/2000/svg">
          <path d="M2054 128.79c-106.66 2.043-211.23 3.9-317.46 12.811-138.06 11.581-273.38 4.22-407.8-23.61C1134.57 77.796 984.18 17.54 742.28 14.259 565.44 11.857 259.72 7.614 0 0v246.37h2560c-65.21-27.369-126.32-63.768-195.36-84.649-98.3-29.68-205.7-34.945-310.64-32.932z" fill="#fff"></path>
        </svg>
      `
        : ''}
    `;
  }
}
