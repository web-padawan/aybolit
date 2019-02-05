import '@aybolit/bootstrap';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('abs-range', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    return html`
      <abs-range .disabled="${disabled}"></abs-range>
    `;
  });
