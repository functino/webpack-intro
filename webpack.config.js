const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    stats: "errors-only",
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
        new ExtractTextPlugin('main.css')
    ]
};
