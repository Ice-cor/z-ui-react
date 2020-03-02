const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
    externals: { // 排除外部依赖的包，减小打包体积
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'reactDOM',
        },
    }
};