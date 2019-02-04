import '@aybolit/material/range/abm-range.js';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('abm-range', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const disabled = boolean('Disabled', false);
    return html`
      <abm-range .disabled="${disabled}"></abm-range>
    `;
  });
