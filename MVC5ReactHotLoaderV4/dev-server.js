var express = require('express')
var devMiddlware = require('webpack-dev-middleware')
var hotMiddleware = require('webpack-hot-middleware')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var cors = require('cors')

var app = express();

var compiler = webpack(webpackConfig);

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path);
    next();
})

app.use(devMiddlware(compiler, {
    quiet: false,
    publicPath: webpackConfig.output.publicPath
}))

app.use(hotMiddleware(compiler))

app.listen(8000, () => console.log('dev middleware started at 8000'))