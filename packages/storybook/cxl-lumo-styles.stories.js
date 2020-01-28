import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles|Elements'
};

// @see https://github.com/vaadin/vaadin-lumo-styles/blob/v1.5.0/demo/typography.html
export const Typograhy = () => {
  return html`
    <h1>Heading 1</h1>
    <h1>Heading 1 with <strong>highlight</strong></h1>
    <h2>Heading 2</h2>
    <h2>Heading 2 with <strong>highlight</strong></h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Paragraph text.</p>
    <p><a href>Paragraph link</a></p>
    <p><strong>Paragraph strong text.</strong></p>
    <p><em>Paragraph italic text.</em></p>
    <p><small>Paragraph small text.</small></p>
    <div><span>Element text.</span></div>
    <div class="font-light"><span>Light element text.</span></div>
    <div><a href>Element link</a></div>
    <div><em>Element italic text.</em></div>
    <div><small>Element small text.</small></div>
  `;
};

export const VaadinButton = () => {
  const label = text('Label', 'Button');

  return html`
    <vaadin-button>
      ${label}
    </vaadin-button>
  `;
};

VaadinButton.story = {
  name: '<vaadin-button>'
};
