const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    withSass,
    withImages,
  ],
  nextConfig
);
