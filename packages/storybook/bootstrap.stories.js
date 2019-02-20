import '@aybolit/bootstrap';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

const COLORS = {
  primary: 'primary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  light: 'light',
  dark: 'dark',
  none: ''
};

const SIZES = {
  small: 'small',
  large: 'large',
  normal: ''
};

storiesOf('Bootstrap', module)
  .addDecorator(withKnobs)
  .add('<abs-button>', () => {
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const color = select('Color', COLORS, COLORS.primary);
    const outline = boolean('Outline', false);
    const label = text('Label', 'Button');
    const link = text('Link', '');
    return html`
      <abs-button
        theme="${color} ${size} ${outline ? 'outline' : ''}"
        .disabled="${disabled}"
        .link="${link}"
      >
        ${label}
      </abs-button>
    `;
  })
  .add('<abs-checkbox>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Checkbox');
    return html`
      <abs-checkbox .disabled="${disabled}">${label}</abs-checkbox>
    `;
  })
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
