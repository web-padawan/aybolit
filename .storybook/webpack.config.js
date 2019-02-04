const path = require('path');
const { rules } = require('../scripts/webpack/webpack.common.js');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../packages/storybook')],
    enforce: 'pre'
  });

  // tweak babel-loader to transpile dependencies
  config.module.rules.push(...rules);

  return config;
};
