import '@aybolit/bootstrap';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
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

storiesOf('abu-switch', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const label = text('Label', 'Switch');
    const size = select('Type', SIZES, SIZES.normal);
    const color = select('Color', COLORS, COLORS.none);
    const disabled = boolean('Disabled', false);
    const outlined = boolean('Outlined', false);
    const rounded = boolean('Rounded', false);

    return html`
      <abu-switch
        theme="${size} ${color} ${outlined ? 'outlined' : ''} ${rounded ? 'rounded' : ''}"
        .disabled="${disabled}"
        >${label}</abu-switch
      >
    `;
  });
