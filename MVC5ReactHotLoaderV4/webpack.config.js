'use strict';
var path = require('path')
var webpack = require('webpack')

var appRoot = path.join(__dirname, 'Client/src/app.js')
var outputPath = path.join(__dirname, 'Client/dist')

module.exports = {
     mode: 'none',
    entry: {
        'app': ['webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr', appRoot],
    },
    output: {
        filename: '[name].js',
        path: outputPath,
        publicPath: 'http://localhost:8000/'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}