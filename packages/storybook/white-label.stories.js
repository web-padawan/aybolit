import '@aybolit/white-label';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('White label', module)
  .addDecorator(withKnobs)
  .add('<abw-button>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Button');
    const link = text('Link', '');
    return html`
      <abw-button .disabled="${disabled}" .link="${link}">
        ${label}
      </abw-button>
    `;
  })
  .add('<abw-checkbox>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Checkbox');
    return html`
      <abw-checkbox .disabled="${disabled}">${label}</abw-checkbox>
    `;
  })
  .add('<abw-progress>', () => {
    const value = number('Value', 10);
    const max = number('Max', 100);
    return html`
      <abw-progress .value="${value}" .max="${max}"></abw-progress>
    `;
  })
  .add('<abw-range>', () => {
    const disabled = boolean('Disabled', false);
    return html`
      <abw-range .disabled="${disabled}"></abw-range>
    `;
  })
  .add('<abw-switch>', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Switch');
    return html`
      <abw-switch .disabled="${disabled}">${label}</abw-switch>
    `;
  });
