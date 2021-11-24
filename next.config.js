const withImages = require('next-images')
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
  ...withImages()
}
