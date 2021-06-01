module.exports = {
  chainWebpack: config => {
    config.entry('app').clear();

    config.entry('app')
      .add('./src/main.ts')
      .add('./src/style/main.less')
      .end();
  }
};
