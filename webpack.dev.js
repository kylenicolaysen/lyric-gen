const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "front/public"),
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^api': '' },
        changeOrigin: true
      }
    }
  },
})