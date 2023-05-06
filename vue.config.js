const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
  pluginOptions: {
    svgSprite: {
      dir: 'src/assets/sprite',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg',
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rule('svg-sprite').use('svgo-loader').loader('svgo-loader');
  },
});
