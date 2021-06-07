/**
 * @typedef { import('@vue/cli-service').ProjectOptions } Config
 * @typedef { [
 *    {
 *      title: string;
 *    }, ...unknown[]
 * ]
 * } HtmlConfig */

const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/** @param source { string } */
const dir = source => path.resolve(__dirname, source);
const paths = {
  root: dir('./'),
  src: dir('./src'),
  dist: dir('./dist')
};

/** @type { Config } */
const config = {
  devServer: {
    port: 11880
  },
  chainWebpack(config) {
    config.entry('app').clear();
    config.entry('app')
      .add(path.resolve(paths.src, 'main.ts'))
      .add(path.resolve(paths.src, 'styles/base/normalize.less'))
      .add(path.resolve(paths.src, 'styles/main.less'))
      .end();
    config.resolve.alias.delete('@');
    config.resolve.alias
      .set('@fonts', path.resolve(paths.src, 'assets/fonts'))
      .set('@images', path.resolve(paths.src, 'assets/images'))
      .set('@styles', path.resolve(paths.src, 'styles'));
    const tsConfigPathsPlugin = new TsconfigPathsPlugin({
      extensions: [
        '.ts',
        '.tsx',
        '.vue'
      ],
      configFile: path.resolve(paths.root, 'tsconfig.json')
    });
    config.resolve.plugin('tsconfig-paths')
      .use(tsConfigPathsPlugin);
    config.plugin('html')
      .tap(htmlConfig => {
        const [ options ] = htmlConfig;
        options.title = 'Shopping cart portfolio';

        return htmlConfig;
      });
  },
  configureWebpack(config) {
    config.devtool = 'source-map';
  },
  css: {
    sourceMap: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(paths.src, 'styles/_variables.less'),
        path.resolve(paths.src, 'styles/mixins/*.less'),
        path.resolve(paths.src, 'styles/base/_animations.less')
      ]
    }
  },
  productionSourceMap: false
};

module.exports = config;
