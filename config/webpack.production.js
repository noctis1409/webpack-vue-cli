const { merge } = require('webpack-merge')
const webpackComm = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let webpackProd = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
}

module.exports = merge(webpackComm, webpackProd)
