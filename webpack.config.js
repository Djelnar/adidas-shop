const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                      "es2015", "react"
                    ],
                    plugins: ["transform-class-properties", "transform-object-rest-spread"],
                }
            },
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[hash].[ext]'
				}
			},
			{
				 test: /\.scss$/,
				 use: [
				   'style-loader',
				   { loader: 'css-loader', options: { importLoaders: 1 } },
				   'postcss-loader'
				 ]
			   }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true,
		proxy: {
      "/login": "http://localhost:3525",
      "/checkhour": "http://localhost:3525",
      "/trycheckout": "http://localhost:3525",
		},
    host: '192.168.0.103',
    }
}