import { configure } from '@storybook/web-components';

export const parameters = {
  layout: 'none', // disable default 'padded'
};

// Needed to force a full page reload as custom element definitions tend to conflict
// @see https://github.com/storybookjs/storybook/blob/next/examples/web-components-kitchen-sink/.storybook/preview.js#L29
const req = require.context('../', true, /\.stories\.(js|mdx)$/);

configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
