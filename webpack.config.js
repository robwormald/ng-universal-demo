const ngtools = require('@ngtools/webpack');
const path = require('path');

module.exports = {
	entry: {
		main: './src/main.server.ts'
	},
	resolve: {
      extensions: ['.ts', '.js']
    },
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new ngtools.AotPlugin({
			tsConfigPath: './tsconfig.json',
		})
	],
	module: {
		rules: [
			{
              test: /\.ts$/,
              loader: '@ngtools/webpack',
            }
		]
	}
}
