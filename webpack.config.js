const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');

const serverConfig = {
	entry: './src/main.server.ts',
	resolve: {
    extensions: ['.ts', '.js']
  },
	target: 'node',
	output: {
		path: 'dist',
		filename: 'server.js'
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
};

const clientConfig = webpackMerge({}, serverConfig, {
  entry:  './src/main.browser.ts',
  output: {
    filename: 'client.js'
  },
  target: 'web'
});

module.exports = [clientConfig, serverConfig];
