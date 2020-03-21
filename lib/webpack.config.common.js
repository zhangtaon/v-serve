const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: path.join(__dirname, './app/main.js'),
    module: {
        rules: [
            {
                test: /\.scss$/,//处理项目中sass编写的样式
                use: [
                    "vue-style-loader",
                    "css-loader", // translates CSS into CommonJS
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `$color: green;`//scss全局变量
                        }
                    }
                ]
            },
            {
                test: /\.css$/,//处理第三方库中的css
                use: [
                    "style-loader",//Adds CSS to the DOM by injecting a <style> tag
                    "css-loader" // translates CSS into CommonJS
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ],
            },
            {
                test: /\.(flv|mp4|swf)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                //指定检查的目录
                include: [path.resolve(__dirname, './')],
                //eslint检查报告的格式规范
                options: {
                    formatter: require("eslint-friendly-formatter")
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new Dotenv()
    ],
    output: {
        filename: 'index_bundle.js'
    }
};