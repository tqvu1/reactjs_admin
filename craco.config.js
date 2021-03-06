const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // '@primary-color': '#fa8c16',
              // '@link-color': '#fa8c16',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
