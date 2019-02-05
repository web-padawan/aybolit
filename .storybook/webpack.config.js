const { rules } = require('../scripts/webpack/webpack.common.js');

module.exports = ({ config }) => {
  // tweak babel-loader to transpile dependencies
  config.module.rules.push(...rules);

  return config;
};
