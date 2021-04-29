import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-card',
};

export const CXLTestimonial = () => html`
  <cxl-card theme="cxl-testimonial">
    <article class="entry">
      <header class="entry-header">
        <img
          class="thumbnail"
          src="https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg"
        />
        <h4>Kurt S.</h4>
        <p>Web Conversion Manager @ Pipedrive</p>
        <p>Estonia</p>
      </header>
      <div class="entry-summary">
        <p>
          Having completed the Conversion Optimization mini degree, this has given me a perfect
          overall base for my current role in marketing where I’m trying to always improve the web
          experience.
        </p>
        <p>
          CXL Institute is constantly putting out new material and also updating existing material
          to be up to date with the current best practises.
        </p>
      </div>
    </article>
  </cxl-card>
`;

CXLTestimonial.story = {
  name: '[theme=cxl-testimonial]',
};
