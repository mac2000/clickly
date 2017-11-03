const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const debug = !process.argv.some(arg => arg === '-p')

module.exports = {
    devtool: debug ? 'inline-source-map' : 'source-map',
    entry: {
        client: './src/client.js',
        demo: './src/demo.js'
    },

    output: {
        filename: 'clickly.[name].js',
        path: path.join(__dirname, 'dist'),
        library: ['clickly', '[name]'],
        libraryTarget: 'var'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{ from: 'public' }])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        https: true,
        open: true,
        inline: true,
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')]
    }
}