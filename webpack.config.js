const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'Z-UI',
        libraryTarget: 'umd', //amd及commonJs的统一作用域模式 => umd
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]

    },
    plugins: [   // 打包需要的各种插件
        new htmlWebpackPlugin({   // 打包HTML
            template: './index.html'   //  HTML模板路径
        })
    ],
};