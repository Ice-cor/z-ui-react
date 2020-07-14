const base = require('./webpack.config')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = Object.assign({}, base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'doc'),
        library: 'Z-UI',
        libraryTarget: 'umd', //amd及commonJs的统一作用域模式 => umd
    },
    entry: {
        example: './example.tsx',
    },
    plugins: [   // 打包需要的各种插件
        new htmlWebpackPlugin({   // 打包HTML
            template: './example.html',   //  HTML模板路径
            filename: 'example.html'
        })
    ],
});