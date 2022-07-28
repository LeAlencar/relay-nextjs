module.exports = {
  compiler: {
    relay: {
      // This should match relay.config.js
      src: './src',
      artifactDirectory: './src/__generated__',
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
    ignoreBuildErrors: true,
  },
}