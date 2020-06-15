import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-featured-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI|cxl-featured-card'
};

export const CXLTestimonial = () => {
  return html`
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

      .testimonials-container {
        font-family: var(--lumo-font-family);
        display: flex;
        flex-flow: row;
        overflow-x: scroll;
        max-width: 90%;
        margin: 0 auto;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }
    </style>

    <div class="testimonials-container">
      ${Array(7)
        .fill(
          html`
            <cxl-featured-card theme="cxl-testimonial">
              <article class="entry">
                <header class="card-entry-header">
                  <img
                    class="card-headshot"
                    src="https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg"
                  />
                  <img
                    class="card-company-logo"
                    src="https://cxl.com/institute/wp-content/uploads/2020/05/Screenshot-2020-05-27-at-13.28.50.png"
                  />
                  <h4>Kurt S.</h4>
                  <p>Web Conversion Manager @ Pipedrive</p>
                  <p>Estonia</p>
                </header>

                <div class="card-entry-summary">
                  <p>
                    Having completed the Conversion Optimization mini degree, this has given me a
                    perfect overall base for my current role in marketing where I’m trying to always
                    improve the web experience.
                  </p>
                  <p>
                    CXL Institute is constantly putting out new material and also updating existing
                    material to be up to date with the current best practises.
                  </p>
                </div>
              </article>
            </cxl-featured-card>
          `
        )
        .map(item => item)}
    </div>
  `;
};

CXLTestimonial.story = {
  name: '[theme=cxl-testimonial]'
};
