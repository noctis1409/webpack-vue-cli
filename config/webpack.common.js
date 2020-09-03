const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: 'bundle.js'
  }
}
