'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {

  var config = {};

  config.entry = {
    app: './src/app/app.js'
  };

  config.output = {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'dev.bundle.js',
    chunkFilename: 'dev.bundle.js'
  };

  config.devtool = 'eval-source-map';

  config.module = {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['es2015']
      }
    }, {
      test: /\.less$/,
      use: [
        {loader: "style-loader"},
        {loader: "css-loader", options: {sourceMap: true}},
        {loader: "less-loader", options: {sourceMap: true}}
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  };

  config.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
    })
  ];

  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  return config;
}();
