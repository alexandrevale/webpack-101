const webpack = require('webpack')

// Objeto de configuração do script do Webpack
module.exports = {
	mode: 'development', // production
	entry: './src/principal.js',
	output: {
		filename: 'principal.js',
		path: __dirname + '/public'
	},
	module: {
		// Definindo os loaders
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader', // Adiciona CSS na DOM injetando a tag <style>
				'css-loader' // Interpreta @import, url()...
			]
		}]
	}
}