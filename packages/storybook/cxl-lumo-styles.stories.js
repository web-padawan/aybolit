import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles'
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
