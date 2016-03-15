const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader'
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
