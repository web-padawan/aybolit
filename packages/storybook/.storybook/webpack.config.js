const transpilePackages = ['lit-html', 'lit-element', '@aybolit'];

module.exports = ({ config }) => {
  // tweak babel-loader to transpile dependencies
  config.module.rules.push({
    test: new RegExp(`node_modules(\\/|\\\\)(${transpilePackages.join('|')})(.*)\\.js$`),
    use: {
      loader: 'babel-loader',
      options: {
        plugins: ['@babel/plugin-proposal-object-rest-spread'],
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
            },
          ],
        ],
        babelrc: false,
      },
    },
  });

  config.module.rules.push({
    test: new RegExp(`src(\\/|\\\\)(.*)\\.js$`),
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
          '@babel/plugin-proposal-class-properties',
        ],
      },
    },
  });

  return config;
};
