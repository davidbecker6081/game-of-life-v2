// Dependencies
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.argv[2] !== 'production';

// SCSS Loaders
const scssLoadersDev = 'css?sourceMap!sass?sourceMap';
const scssLoaders = 'css!sass';

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'dist/js/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    dev ? scssLoadersDev : scssLoaders
                )
            }
        ],
    },
    plugins: dev ? [ new ExtractTextPlugin('./dist/css/style.css')] : [
        new ExtractTextPlugin('./dist/css/style.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ sourcemap: false }),
    ],
};