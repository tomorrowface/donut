const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const theme = require('./donut/style/themes/var')

module.exports = {
  mode: "development",
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:5].bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          use: ["babel-loader"],
          exclude: path.resolve(__dirname, 'node_modules')
      },
      {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: theme,
                javascriptEnabled: true
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'donut demo',
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    })
  ]
}
