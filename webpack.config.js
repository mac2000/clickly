const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const debug = !process.argv.some(arg => arg === '-p')

module.exports = {
    devtool: debug ? 'inline-source-map' : 'source-map',
    entry: {
        client: './src/client.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{from: 'public'}])
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        library: 'clickly',
        libraryTarget: 'var'
    },
    devServer: {
        https: true,
        open: true,
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')]
    }
}