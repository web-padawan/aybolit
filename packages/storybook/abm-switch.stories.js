import '@aybolit/material';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('abm-switch', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Switch');
    return html`
      <abm-switch .disabled="${disabled}">${label}</abm-switch>
    `;
  });
