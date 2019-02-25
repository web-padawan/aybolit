import '@aybolit/material';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

const BUTTON_TYPES = {
  outlined: 'outlined',
  contained: 'contained',
  text: ''
};

storiesOf('Material', module)
  .addDecorator(withKnobs)
  .add('<abm-button>', () => {
    const disabled = boolean('Disabled', false);
    const type = select('Type', BUTTON_TYPES, BUTTON_TYPES.text);
    const label = text('Label', 'Button');
    const link = text('Link', '');
    return html`
      <abm-button theme="${type}" .disabled="${disabled}" .link="${link}">
        ${label}
      </abm-button>
    `;
  })
  .add('<abm-checkbox>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Checkbox');
    return html`
      <abm-checkbox .disabled="${disabled}">${label}</abm-checkbox>
    `;
  })
  .add('<abm-progress>', () => {
    const value = number('Value', 10);
    const max = number('Max', 100);
    return html`
      <abm-progress .value="${value}" .max="${max}"></abm-progress>
    `;
  })
  .add('<abm-range>', () => {
    const disabled = boolean('Disabled', false);
    return html`
      <abm-range .disabled="${disabled}"></abm-range>
    `;
  })
  .add('<abm-switch>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Switch');
    return html`
      <abm-switch .disabled="${disabled}">${label}</abm-switch>
    `;
  });
