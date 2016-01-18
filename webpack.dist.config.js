var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    path: './dist/',
    filename: 'index.js',
    library: 'Grout',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
}