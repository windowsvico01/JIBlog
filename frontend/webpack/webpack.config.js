const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname,'../src/index.js')
    ],
    output: {
        path: path.resolve(__dirname,'../../static'),
        filename: 'app/[name]_[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['env','stage-0','react'],
                        plugins:[['import',{'libraryName':'antd','style':'css'}]]
                    }
                }
            },{
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                }],
            },{
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                },{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },{
                    loader: 'less-loader',
                    options: {
                        modifyVars: {
                            '@primary-color': '#9F79EE',
                            '@item-active-bg': '#7037e8',
                            '@item-hover-bg': '#7037e8',
                        },
                        javascriptEnabled: true,
                    }
                }]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};