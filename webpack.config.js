const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ZopfliPlugin = require('zopfli-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const AssetsByTypePlugin = require('webpack-assets-by-type-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const noop = function() {};

module.exports = {
    entry: './src/index',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    stats: "errors-only",
    devtool: isProd ? "false" : "eval",
    module: {
        loaders: [
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
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin('main.[hash].css'),
        isProd ? new UglifyJsPlugin() : noop,
        isProd ? new ZopfliPlugin() : noop,
        process.env.ANALYZE ? new BundleAnalyzerPlugin() : noop,
        new CleanPlugin(['dist']),
        new AssetsByTypePlugin({
            path: path.join(__dirname, "dist/assets.json")
        }),
        new HtmlWebpackPlugin()
    ]
};
