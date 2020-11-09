const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径
    .set('style', resolve('./src/style'))
    .set('components', resolve('./src/components'))
    .set('basecomponents', resolve('./src/baseComponent'))
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        prependData: `
          @import "~@/style/variables.scss";
          @import "~@/style/mixin.scss";
        `
      },
    }
  }
}