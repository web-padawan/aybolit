import '@conversionxl/cxl-lumo-styles';
import { html } from 'lit-html';

export default {
  title: 'CXL UI|cxl-jobs-components'
};

export const VaadinButton = () => {
  return html`
    <vaadin-tabs orientation="horizontal" theme="cxl-jobs-horizontal-slider minimal">
      <vaadin-tab>
        <figure>
          <img
            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-1.jpg"
            alt=""
            data-id="220"
            data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-1.jpg"
            data-link="http://jobs.uprecords.org/sample-page/slide-img-1-2/"
            class="wp-image-220"
          />
        </figure>
      </vaadin-tab>
      <vaadin-tab>
        <figure>
          <img
            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-2.jpg"
            alt=""
            data-id="221"
            data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-2.jpg"
            data-link="http://jobs.uprecords.org/sample-page/slide-img-2/"
            class="wp-image-221"
          />
        </figure>
      </vaadin-tab>
      <vaadin-tab>
        <figure>
          <img
            src="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-3.jpg"
            alt=""
            data-id="222"
            data-full-url="http://jobs.uprecords.org/wp-content/uploads/sites/4/2020/01/slide-img-3.jpg"
            data-link="http://jobs.uprecords.org/sample-page/slide-img-3-2/"
            class="wp-image-222"
          />
        </figure>
      </vaadin-tab>
    </vaadin-tabs>
  `;
};

VaadinButton.story = {
  name: 'vaadin-tabs[theme=cxl-jobs-horizontal-slider]'
};
