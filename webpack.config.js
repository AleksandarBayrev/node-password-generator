// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = [{
    entry: './src/index.ts',
    mode: isProduction ? 'production' : 'development',
    target: 'node',
    devtool: isProduction,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'npg.js'
    },
    plugins: [
        isProduction && new WorkboxWebpackPlugin.GenerateSW()
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    devtool: false
}, {
    entry: './src/generatePasswordWorker.ts',
    mode: isProduction ? 'production' : 'development',
    target: 'node',
    devtool: isProduction,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'generatePasswordWorker.js'
    },
    plugins: [
        isProduction && new WorkboxWebpackPlugin.GenerateSW()
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    devtool: false
}];

module.exports = config;