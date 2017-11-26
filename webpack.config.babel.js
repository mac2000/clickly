import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const debug = !process.argv.some(arg => arg === '-p')

export default {
    devtool: debug ? 'inline-source-map' : 'source-map',
    entry: {
        client: './src/client.js',
        iframer: './src/iframer.js',
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