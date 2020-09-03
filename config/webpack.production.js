const { merge } = require('webpack-merge')
const webpackComm = require('./webpack.common')

let webpackProd = {
  mode: 'production'
}

module.exports = merge(webpackComm, webpackProd)
