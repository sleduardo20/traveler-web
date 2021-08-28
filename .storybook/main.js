var webpack = require('webpack');

module.exports = {
  "stories": ["../src/**/stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  },

  webpackFinal: (config) => {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
        deviceSizes: [320,640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384,1400],
        domains: ["images.unsplash.com"],
        path: '/',
        loader: 'default',
      }),
    }));
    return config;
  },
};