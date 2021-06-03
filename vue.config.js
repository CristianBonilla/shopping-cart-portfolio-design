const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const dir = source => path.resolve(__dirname, source);
const paths = {
  root: dir('./'),
  src: dir('./src'),
  dist: dir('./dist')
};

module.exports = {
  devServer: {
    port: 11880
  },
  chainWebpack: config => {
    config.entry('app').clear();
    config.entry('app')
      .add(path.resolve(paths.src, 'main.ts'))
      .add(path.resolve(paths.src, 'styles/base/normalize.less'))
      .add(path.resolve(paths.src, 'styles/main.less'))
      .end();
    const tsConfigPathsPlugin = new TsconfigPathsPlugin({
      extensions: [
        '.ts',
        '.tsx',
        '.vue'
      ],
      configFile: path.resolve(paths.root, 'tsconfig.json')
    });
    config.resolve.alias.delete('@');
    config.resolve.plugin('tsconfig-paths')
      .use(tsConfigPathsPlugin);
    config.plugin('html')
      .tap(htmlConfig => {
        const [ options ] = htmlConfig;
        options.title = 'Shopping cart portfolio';

        return htmlConfig;
      });
  }
};
