const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// Objeto de configuração do script do Webpack
module.exports = {
	mode: modoDev ? 'development' : 'production',
	entry: './src/principal.js',
	output: {
		filename: 'principal.js',
		path: __dirname + '/public'
	},
	devServer: {
		contentBase: "./public",
		port: 9000
	},
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({})
		]
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
			test: /\.s?[ac]ss$/,
			use: [
				// 'style-loader', // Adiciona CSS na DOM injetando a tag <style>
				MiniCssExtractPlugin.loader,
				'css-loader', // Interpreta @import, url()...
				'sass-loader',
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		}]
	}
}