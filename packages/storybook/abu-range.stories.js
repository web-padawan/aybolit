import '@aybolit/bulma/range/abu-range.js';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

const COLORS = {
  primary: 'primary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  none: ''
};

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  normal: ''
};

storiesOf('abu-range', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const circle = boolean('Circle', false);
    const size = select('Type', SIZES, SIZES.normal);
    const color = select('Color', COLORS, COLORS.none);
    const disabled = boolean('Disabled', false);
    return html`
      <abu-range
        theme="${size} ${color} ${circle ? 'circle' : ''}"
        .disabled="${disabled}"
      ></abu-range>
    `;
  });
