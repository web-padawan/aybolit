import { configure } from '@storybook/polymer';

// @see https://github.com/storybookjs/storybook/tree/v5.3.0-alpha.42/app/web-components#user-content-setup-page-reload-via-hmr
const req = require.context('../', true, /\.stories\.(js)$/);

configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
