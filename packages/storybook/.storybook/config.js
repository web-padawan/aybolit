import { configure } from '@storybook/polymer';

configure([
  require.context('../', true, /\.stories\.js$/),
], module);
