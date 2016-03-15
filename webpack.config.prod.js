const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.prod.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer({
      browsers:["last 2 version", "IE >= 9"]
    })];
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      actions: path.join(__dirname, 'src/actions'),
      components: path.join(__dirname, 'src/components'),
      constants: path.join(__dirname, 'src/constants'),
      containers: path.join(__dirname, 'src/containers'),
      reducers: path.join(__dirname, 'src/reducers'),
      store: path.join(__dirname, 'src/store'),
      styles: path.join(__dirname, 'src/styles')
    }
  }
};
