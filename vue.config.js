const path = require('path');

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pwa: {
    name: 'AIDA-Dashboard',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: path.join('src', 'service-worker.js')
    }
  },
  devServer: { proxy: process.env.SERVER_URL }
};
