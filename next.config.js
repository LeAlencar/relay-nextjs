const relay = require('./relay.config.js');

const nextConfig = {
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
      language: 'typescript',
    },
    externalDir: true,
  },
  experimental: {
    runtime: 'nodejs',
    concurrentFeatures: true,
  },
  serverRuntimeConfig: {
    projectRoot: __dirname,
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
