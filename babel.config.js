module.exports = {
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              ie: 11
            }
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: false,
            helpers: false,
            regenerator: true,
            useESModules: false
          }
        ]
      ]
    },
    visual: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              chrome: 73
            }
          }
        ]
      ]
    }
  }
};
