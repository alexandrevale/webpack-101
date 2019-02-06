const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Objeto de configuração do script do Webpack
module.exports = {
	mode: 'development', // production
	entry: './src/principal.js',
	output: {
		filename: 'principal.js',
		path: __dirname + '/public'
	},
	plugins: [
		// Instanciando a função construtora com objeto como parâmetro 
		new MiniCssExtractPlugin({
			filename: "estilo.css"
		})
	],
	module: {
		// Definindo os loaders
		rules: [{
			test: /\.css$/,
			use: [
				// 'style-loader', // Adiciona CSS na DOM injetando a tag <style>
				MiniCssExtractPlugin.loader,
				'css-loader' // Interpreta @import, url()...
				
			]
		}]
	}
}