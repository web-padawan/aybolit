import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('CXL Lumo Styles', module)
  .addDecorator(withKnobs)
  .add('<vaadin-button>', () => {
    const label = text('Label', 'Button');
    return html`
      <vaadin-button>
        ${label}
      </vaadin-button>
    `;
  });
