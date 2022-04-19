import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/cxl-jw-player.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

const Template = ({}) =>
  html`
    <style>
      #root-inner {
        height: 100vh;
      }
    </style>
    <cxl-jw-player playerId="IxzuqJ4M" videoId="C8YE48zj"></cxl-jw-player>
  `;

export const Default = Template.bind({});
