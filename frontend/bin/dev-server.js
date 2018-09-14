/***eslint-disable */
'use strict'
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack/webpack.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../../static'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 9090,
    publicPath: '/'
});

server.listen(9090, 'localhost', function(err) {
    if (err) throw err;
});