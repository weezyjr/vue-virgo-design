const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx|vue|mdx)'],
  style: ['../src/assets/style.css'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          },
        }
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.scss', '.sass', '.html')

    // Return the altered config
    return config;
  },
};