import '@aybolit/bulma';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
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
  .add('<abu-button>', () => {
    const label = text('Label', 'Button');
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const theme = select('Theme', COLORS, COLORS.none);
    const link = text('Link', '');
    const outlined = boolean('Outlined', false);
    const rounded = boolean('Rounded', false);
    return html`
      <abu-button
        .disabled="${disabled}"
        .link="${link}"
        theme="${theme}"
        size="${size}"
        ?outlined="${outlined}"
        ?rounded="${rounded}"
      >
        ${label}
      </abu-button>
    `;
  })
  .add('<abu-checkbox>', () => {
    const label = text('Label', 'Checkbox');
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const theme = select('Theme', COLORS, COLORS.none);
    const filled = boolean('Filled', false);
    return html`
      <abu-checkbox theme="${theme}" size="${size}" ?filled="${filled}" .disabled="${disabled}">
        ${label}
      </abu-checkbox>
    `;
  })
  .add('<abu-progress>', () => {
    const value = number('Value', 10);
    const max = number('Max', 100);
    const size = select('Size', SIZES, SIZES.normal);
    const theme = select('Theme', COLORS, COLORS.none);
    return html`
      <abu-progress .value="${value}" .max="${max}" theme="${theme}" size="${size}"></abu-progress>
    `;
  })
  .add('<abu-range>', () => {
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const theme = select('Theme', COLORS, COLORS.none);
    const rounded = boolean('Rounded', false);
    return html`
      <abu-range
        theme="${theme}"
        size="${size}"
        ?rounded="${rounded}"
        .disabled="${disabled}"
      ></abu-range>
    `;
  })
  .add('<abu-switch>', () => {
    const label = text('Label', 'Switch');
    const disabled = boolean('Disabled', false);
    const size = select('Size', SIZES, SIZES.normal);
    const theme = select('Theme', COLORS, COLORS.none);
    const outlined = boolean('Outlined', false);
    const rounded = boolean('Rounded', false);
    return html`
      <abu-switch
        .disabled="${disabled}"
        theme="${theme}"
        size="${size}"
        ?outlined="${outlined}"
        ?rounded="${rounded}"
      >
        ${label}
      </abu-switch>
    `;
  });
