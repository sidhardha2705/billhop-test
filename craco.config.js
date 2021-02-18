const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#49A2F5',
              '@font-size-sm': '14px',
              '@font-size-base': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
