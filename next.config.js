// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    console.log('ASDF:::', __dirname);
    config.resolve = {
      modules: [path.resolve(__dirname, 'packages'), ...config.resolve.modules]
    }

    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}
