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
                loader: 'babel-loader',
                exclude: /node_modules/
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