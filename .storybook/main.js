const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-essentials',
    'storybook-addon-designs',
  ],
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      '@emotion/babel-preset-css-prop',
    ],
  }),
  webpackFinal: async (storybookConfig) => {
    // // Exclude svg for fileLoaderRule, we want to use our custom rule
    // const fileLoaderRule = storybookConfig.module.rules.find((rule) => {
    //   if (!rule.test) {
    //     return
    //   }
    //   return rule.test.test('.svg')
    // })
    // fileLoaderRule.exclude = [/.*.svg/]

    storybookConfig.resolve = {
      ...storybookConfig.resolve,
      plugins: [...((storybookConfig.resolve && storybookConfig.resolve.plugins) || []), new TsconfigPathsPlugin({})],
    }

    storybookConfig.plugins = [...storybookConfig.plugins, new NodePolyfillPlugin()]

    return storybookConfig
  },
}
