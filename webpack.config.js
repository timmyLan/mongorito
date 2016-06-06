var path = require('path');
var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    devtool: 'eval',
    entry: {
        'index': ['./public/app/app', hotMiddlewareScript]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: path.join(__dirname, 'node_modules')
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        }]
    },
};
