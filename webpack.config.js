const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './index',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html.ejs',
            inject: 'body',
        }),
        new WebpackNotifierPlugin(),
    ],

    devServer: {
        port: 3330,
        host: 'localhost',
    },

    devtool: 'inline-source-map'
};
