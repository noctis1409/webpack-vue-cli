const { merge } = require('webpack-merge')
const webpackComm = require('./webpack.common')

let webpackProd = {
  // model: 'production'
}

module.exports = merge(webpackComm, webpackProd)
