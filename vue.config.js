module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75,//效果的宽度/10
            unitPrecision: 5,
            //
            propList: ['*'],
            //
            selectorBlackList: ['.borderBottom'],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /node_modules/i
          })
        ]
      }
    }
  }
}