const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../tmp'),
    filename: 'tests.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(lit-element|lit-html|@open-wc|@aybolit)\/).*/
      }
    ]
  }
};
