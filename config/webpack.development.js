const { merge } = require('webpack-merge')
const webpackComm = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let webpackDev = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
}

module.exports = merge(webpackComm, webpackDev)
