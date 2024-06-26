const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'relatorio-frontend',

  exposes: {
    './MFE-QWA-RELATORIOS-DASHBOARD': './src/app/modules/dashboard/dashboard.module.ts',
    './MFE-QWA-RELATORIOS-VENDEDORES': './src/app/modules/vendedores/vendedores.module.ts',
    './MFE-QWA-RELATORIOS-CLIENTES-ATIVOS': './src/app/modules/clientes-ativos/clientes-ativos.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
