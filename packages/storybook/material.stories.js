import '@aybolit/material';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('Material', module)
  .addDecorator(withKnobs)
  .add('<abm-checkbox>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Checkbox');
    return html`
      <abm-checkbox .disabled="${disabled}">${label}</abm-checkbox>
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
