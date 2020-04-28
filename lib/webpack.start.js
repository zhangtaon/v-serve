require('dotenv').config()
const webpackServer = require('./webpack.server')
const webpackCustomer = require('./webpack.customer');
const webpackCommon = require("./webpack.common")
const merge = require('webpack-merge')

module.exports = merge(webpackCommon, webpackServer, webpackCustomer);