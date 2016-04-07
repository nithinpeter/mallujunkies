module.exports ={
	
	entry: "./client.js",
	output: {
		path: "./build",
		fileName: "bundle.js"	
	},
	
	
	// resolve: {
	// 	extensions: [ ".js", ".jsx" ]
	// },
	
	module: {
		loaders: [
			{
				test: /\.jsx|.js$/,
                exclude: "node_modules",
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				}
			}
		]	
	}
	
}