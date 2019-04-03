const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { rules } = require('./utils/webpack.common.js');

const OUTPUT_PATH = resolve('build');

module.exports = {
  entry: './packages/bulma/src/index.js',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'),
        to: resolve(OUTPUT_PATH, 'vendor')
      },
      {
        from: resolve('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
        to: resolve(OUTPUT_PATH, 'vendor')
      }
    ]),
    new HtmlWebpackPlugin({
      template: resolve('./demo/index.html')
    })
  ],
  serve: {
    host: '127.0.0.1',
    port: 8082,
    hotClient: false
  }
};
