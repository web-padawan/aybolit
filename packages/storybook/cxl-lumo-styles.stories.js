import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles'
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
    <p><a href>Link</a></p>
    <p><strong>Strong text.</strong></p>
    <p><em>Italic text.</em></p>
    <p><small>Small text.</small></p>
    <div><span>Element text.</span></div>
    <div><a href>Link</a></div>
    <div><em>Italic text.</em></div>
    <div><small>Small text.</small></div>
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
