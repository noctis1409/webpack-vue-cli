const { merge } = require('webpack-merge')
const webpackComm = require('./webpack.common')

let webpackDev = {
  devServer: {
    host: '0.0.0.0'
  },
  mode: 'development'
}
module.exports = merge(webpackComm, webpackDev)
