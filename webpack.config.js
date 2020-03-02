const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ],

  devServer: {
    contentBase: 'docs/'
  }
};
