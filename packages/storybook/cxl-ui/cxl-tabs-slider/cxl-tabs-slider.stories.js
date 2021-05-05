import '@conversionxl/cxl-ui/src/components/cxl-card';
import '@conversionxl/cxl-ui/src/components/cxl-tabs-slider';
import { html } from 'lit-html';
import { CXLTestimonial } from '../cxl-card/[theme=cxl-testimonial].stories';
import archiveData from '../cxl-vaadin-accordion/theme=cxl-archive.data.json';

export default {
  title: 'CXL UI/cxl-tabs-slider',
};

export const CXLTabsSlider = ({ Cards }) => html`
  <style>
    vaadin-tab {
      max-width: calc(var(--cxl-content-width) / 2);
    }
  </style>

  <cxl-tabs-slider orientation="horizontal" theme="minimal">
    ${archiveData
      .slice(0, Cards)
      .map((el) => html` <vaadin-tab>${CXLTestimonial({ el })}</vaadin-tab> `)}
  </cxl-tabs-slider>
`;

Object.assign(CXLTabsSlider, {
  args: {
    Cards: 3,
  },
  storyName: '[orientation=horizontal]',
});
