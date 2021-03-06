'use strict';

const args = require('yargs').argv;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const base = './';
const entryFile = path.resolve(__dirname, 'src/main.jsx');

const isProduction = args.prod;

let entryApp = [
    entryFile
];

let plugins = [
    new ExtractTextPlugin(
        (isProduction) ? '[name].[hash].css' : '[name].css'
    ),
    new webpack.optimize.CommonsChunkPlugin({
        filename: (isProduction) ? 'vendor.[hash].js' : 'vendor.js',
        name: 'vendor'
    }),
    new HTMLWebpackPlugin({
        chunks: ['app', 'vendor'],
        template: 'src/index.html'
        // TODO: favicon: 'favicon.ico'
    })
];

if (!isProduction) {
    entryApp.push(
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    );
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

if (isProduction) {
    plugins.push(
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
        new webpack.optimize.OcurrenceOrderPlugin()
    );
}

module.exports = {
    entry: {
        app: entryApp,
        vendor: [
            'classnames',
            'lodash',
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        chunkFilename: (isProduction) ? '[name].[hash].chunk.js' : '[name].chunk.js',
        filename: (isProduction) ? '[name].[hash].js' : '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                loader: 'html-loader',
                include: '/src/',
                test: /\.html$/
            },
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.jsx?$/
            },
            {
                loader: 'style-loader!css-loader!sass-loader?sourceMap',
                test: /\.scss$/
            },
            {
                loader: 'file-loader?name=assets/fonts/[name].[ext]?[hash]',
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/
            },
            {
                loader: 'url-loader?limit=8192&name=assets/images/[name].[hash].[ext]',
                test: /\.(png|jpg)$/
            }
        ]
    },
    plugins: plugins,
    devtool: (isProduction) ? 'source-map' : 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
};
