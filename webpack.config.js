const Config = {

    entry: "./client",
    output: {
        fileName: "bundle.js",
        path: __dirname + "/build"
    },


    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: "node_modules",
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

}

module.exports = Config;