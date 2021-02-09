import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-button';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Elements',
};

export const VaadinButton = () => {
  const label = text('Label', 'Button');

  return html`
    <h6>Basic</h6>
    <vaadin-button>${label}</vaadin-button>
    <h6>Disabled</h6>
    <vaadin-button disabled>${label}</vaadin-button>
    <h6>Primary</h6>
    <vaadin-button theme="primary">${label}</vaadin-button>
    <h6>Primary Contrast</h6>
    <vaadin-button theme="primary contrast">${label}</vaadin-button>
    <h6>Secondary</h6>
    <vaadin-button>${label}</vaadin-button>
    <h6>Tertiary</h6>
    <vaadin-button theme="tertiary">${label}</vaadin-button>
    <h6>Tertiary inline</h6>
    <vaadin-button theme="tertiary-inline">${label}</vaadin-button>
    <h6>Upstream</h6>
    <p>
      Also see
      <a href="https://vaadin.com/components/vaadin-button/html-examples"
        >https://vaadin.com/components/vaadin-button/html-examples</a
      >
    </p>
  `;
};

VaadinButton.storyName = '<vaadin-button>';
