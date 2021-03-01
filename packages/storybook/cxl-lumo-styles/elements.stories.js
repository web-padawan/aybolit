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

export const VaadinNotification = () => {
  const message = text('Notification.', 'My message');

  return html`
    <vaadin-notification opened position="top-stretch" duration="-1" theme="success">
      <template><div>Position: top-stretch ${message}</div></template>
    </vaadin-notification>
    <vaadin-notification opened position="top-start" duration="-1" theme="success">
      <template><div>Position: top-start ${message}</div></template>
    </vaadin-notification>
    <vaadin-notification opened position="top-center" duration="-1" theme="success">
      <template>Position: top-center ${message}</template>
    </vaadin-notification>
    <vaadin-notification opened position="top-end" duration="-1" theme="success">
      <template>Position: top-end ${message}</template>
    </vaadin-notification>
    <vaadin-notification opened position="middle" duration="-1" theme="info">
      <template>Position: middle ${message}</template>
    </vaadin-notification>
    <vaadin-notification opened position="bottom-start" duration="-1" theme="info">
      <template>Position: bottom-start ${message}</template>
    </vaadin-notification>
    <vaadin-notification opened position="bottom-center" duration="-1" theme="info">
      <template>Position: bottom-center ${message}</template>
    </vaadin-notification>
    <vaadin-notification opened position="bottom-end" duration="-1" theme="info">
      <template>Position: bottom-end ${message}</template>
    </vaadin-notification>
    <vaadin-notification opened position="bottom-stretch" duration="-1" theme="error">
      <template>Position: bottom-stretch ${message}</template>
    </vaadin-notification>
    <p>
      Also see
      <a href="https://vaadin.com/components/vaadin-notification/html-examples"
        >https://vaadin.com/components/vaadin-notification/html-examples</a
      >
    </p>
  `;
};

VaadinNotification.storyName = '<vaadin-notification>';
