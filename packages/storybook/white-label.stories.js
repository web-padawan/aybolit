import '@aybolit/white-label';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('White label', module)
  .addDecorator(withKnobs)
  .add('<abw-range>', () => {
    const disabled = boolean('Disabled', false);
    return html`
      <abw-range .disabled="${disabled}"></abw-range>
    `;
  })
  .add('<abw-switch>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Switch');
    return html`
      <abw-switch .disabled="${disabled}">${label}</abw-switch>
    `;
  });
