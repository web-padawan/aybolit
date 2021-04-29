import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-card',
};

export const CXLTestimonial = () => html`
  <style>
    html {
      font-family: var(--lumo-font-family);
    }

    .entry {
      transition: all 0.2s ease-in;
    }

    img {
      display: block;
    }

    p,
    blockquote {
      margin-top: 0.5em;
      margin-bottom: 0.75em;
    }
  </style>

  <cxl-card theme="cxl-testimonial">
    <article class="entry">
      <header class="entry-header">
        <img
          class="thumbnail"
          src="https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg"
        />
        <img
          class="company-logo"
          src="https://cxl.com/institute/wp-content/uploads/2020/05/Screenshot-2020-05-27-at-13.28.50.png"
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
