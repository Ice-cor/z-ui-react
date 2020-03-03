const base = require('./webpack.config')
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = Object.assign({}, base, {
    mode: 'development',
    plugins: [   // 打包需要的各种插件
        new htmlWebpackPlugin({   // 打包HTML
            template: './index.html'   //  HTML模板路径
        })
    ],
});