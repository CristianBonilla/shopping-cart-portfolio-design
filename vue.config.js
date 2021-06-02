const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const dir = src => path.resolve(__dirname, src);
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
      configFile: path.resolve(paths.root, 'tsconfig.json')
    });
    config.resolve.alias.delete('@');
    config.resolve.plugin('tsconfig-paths')
      .use(tsConfigPathsPlugin);
  }
};
