const path = require('path')
const debug = !process.argv.some(arg => arg === '-p')

module.exports = {
    devtool: debug ? 'inline-source-map' : false,
    entry: {
        client: './src/client.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/dist'),
        library: 'clickly',
        libraryTarget: 'var'
    }
}