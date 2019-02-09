import '@aybolit/bulma';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
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

storiesOf('Bulma', module)
  .addDecorator(withKnobs)
  .add('<abu-range>', () => {
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const color = select('Color', COLORS, COLORS.none);
    const circle = boolean('Circle', false);
    return html`
      <abu-range
        theme="${size} ${color} ${circle ? 'circle' : ''}"
        .disabled="${disabled}"
      ></abu-range>
    `;
  })
  .add('<abu-switch>', () => {
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const color = select('Color', COLORS, COLORS.none);
    const label = text('Label', 'Switch');
    const outlined = boolean('Outlined', false);
    const rounded = boolean('Rounded', false);
    return html`
      <abu-switch
        theme="${size} ${color} ${outlined ? 'outlined' : ''} ${rounded ? 'rounded' : ''}"
        .disabled="${disabled}"
      >
        ${label}
      </abu-switch>
    `;
  });
