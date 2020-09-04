const { merge } = require('webpack-merge')
const webpackComm = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let webpackDev = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ],
  devServer: {
    quiet: true,
    host: '0.0.0.0',
  },
  mode: 'development'
}
module.exports = merge(webpackComm, webpackDev)
