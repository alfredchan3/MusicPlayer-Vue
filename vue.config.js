const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('src', resolve('src'))
      .set('common',resolve('src/common'))
      .set('components',resolve('src/components'))
      .set('base',resolve('src/base'))
      .set('api',resolve('src/api'))
  }
}
