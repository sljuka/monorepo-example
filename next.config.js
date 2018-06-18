// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const withTM = require('@weco/next-plugin-transpile-modules')

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  },
}

// Use withTM until this issue resolves: https://github.com/zeit/next.js/issues/706
// After that use 'transpileModules' as standard next.config property
// ['example'] is regexp. This means that every package with name starting with 'example...' is transpiled
module.exports = withTM({...nextConfig, transpileModules: ['example']})
