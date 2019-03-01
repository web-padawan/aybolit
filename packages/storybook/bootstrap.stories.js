import '@aybolit/bootstrap';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
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
    const theme = select('Theme', COLORS, COLORS.primary);
    const outline = boolean('Outline', false);
    const label = text('Label', 'Button');
    const link = text('Link', '');
    return html`
      <abs-button
        .disabled="${disabled}"
        .link="${link}"
        theme="${theme}"
        size="${size}"
        ?outline="${outline}"
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
  .add('<abs-progress>', () => {
    const value = number('Value', 10);
    const max = number('Max', 100);
    const size = select('Size', SIZES, SIZES.normal);
    const theme = select('Theme', COLORS, COLORS.primary);
    const striped = boolean('Striped', false);
    return html`
      <abs-progress
        .value="${value}"
        .max="${max}"
        theme="${theme}"
        size="${size}"
        ?striped="${striped}"
      ></abs-progress>
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
