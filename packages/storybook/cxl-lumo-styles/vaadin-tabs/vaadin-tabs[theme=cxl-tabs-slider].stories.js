import { html } from 'lit-html';
import '../../../cxl-ui/src/components/cxl-card';
import archiveData from '../../cxl-ui/cxl-vaadin-accordion/theme=cxl-archive.data.json';
import { CXLTestimonial } from '../../cxl-ui/cxl-card/theme=cxl-testimonial.stories';

export default {
  title: 'CXL Lumo Styles/Elements/vaadin-tabs',
};

export const Default = () => html`
  <style>
    vaadin-tab {
      width: calc(var(--cxl-wrap-width) / 2.5);
    }
  </style>

  <vaadin-tabs orientation="horizontal" theme="cxl-tabs-slider minimal">
    ${archiveData.map((el) => html` <vaadin-tab>${CXLTestimonial({ el })}</vaadin-tab> `)}
  </vaadin-tabs>
`;

Default.storyName = '[theme=cxl-tabs-slider]';
