import '@aybolit/bootstrap';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('abs-switch', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Switch');
    return html`
      <abs-switch .disabled="${disabled}">${label}</abs-switch>
    `;
  });
