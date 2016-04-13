
var path = require('path');
var webpack = require('webpack');

const Config = {

    entry: [
        // 'webpack-dev-server/client?http://127.0.0.1:8080/',
        // 'webpack/hot/only-dev-server',
        "./client"
    ],
    output: {
        fileName: "bundle.js",
        path: __dirname + "/build",
        publicPath: "http://localhost:3001/"
    },


    resolve: {
        // modulesDirectories: ['node_modules', 'shared'],
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: "node_modules",
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin()
    // ],
    devtool: 'inline-source-map'
    // ,
    // devServer: {
    //     hot: true,
    //     proxy: {
    //         '*': 'http://127.0.0.1:' + (process.env.PORT || 3001)
    //     },
    //     host: '127.0.0.1'
    // }

}

module.exports = Config;