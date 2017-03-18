const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './examples/entry.js',

  output: {
    path: path.join(__dirname, 'examples'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],

  devServer: {
    contentBase: 'examples/'
  }
};
