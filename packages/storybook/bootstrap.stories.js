import '@aybolit/bootstrap';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('Bootstrap', module)
  .addDecorator(withKnobs)
  .add('<abs-range>', () => {
    const disabled = boolean('Disabled', false);
    return html`
      <abs-range .disabled="${disabled}"></abs-range>
    `;
  })
  .add('<abs-switch>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Switch');
    return html`
      <abs-switch .disabled="${disabled}">${label}</abs-switch>
    `;
  });
