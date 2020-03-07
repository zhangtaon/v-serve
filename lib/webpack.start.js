const server = require('./webpack.server')
const merge = require('webpack-merge')
const webpackCommon = require("./webpack.config.common")

module.exports = merge(webpackCommon, server);