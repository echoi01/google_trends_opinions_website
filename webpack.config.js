const path = require('path')
// const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'webpack-bundle.js',
        publicPath: 'build',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
  }
}
