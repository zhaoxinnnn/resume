const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : path.resolve(__dirname,"src"),
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
                use : ["css-loader","style-loader"]
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/index.html"
        })
    ]
}