const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const noop = function() {};

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: './src/index',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].chunk.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    stats: "errors-only",
    optimization: {
        runtimeChunk: true,
        splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            }
        ]
    }
};
