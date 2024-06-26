const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'produto-frontend',

  exposes: {
    './MFE-QWA-PRODUTOS-DASHBOARD': './src/app/modules/dashboard/dashboard.module.ts',
    './MFE-QWA-PRODUTOS-PRODUTOS': './src/app/modules/produtos/produtos.module.ts',
    './MFE-QWA-PRODUTOS-SEGMENTOS': './src/app/modules/segmentos/segmentos.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
