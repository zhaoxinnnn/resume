const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : path.resolve(__dirname,"src/main.js"),
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js(x)?$/,
                loader : "babel-loader"
            },
            {
                test : /\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback : "style-loader",
                    use : "css-loader"/*,
                     publicfile : path.resolve(__dirname,"./dist")//打包后的css文件的路径*/
                })
            }
        ]
    },
    plugins : [
        new ExtractTextWebpackPlugin("style.css"),
        new htmlWebpackPlugin({
            template : path.resolve(__dirname,"./src/index.html")
        })
    ]
}