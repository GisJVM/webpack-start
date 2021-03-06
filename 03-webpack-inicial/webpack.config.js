const HtmlWebPackPlugin = require('html-webpack-plugin');
const MIniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    mode: 'development',
    module: {
        rules: [

            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /style\.css$/,
                use: [
                    MIniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {

                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false,
                }
            },
            {
                test: /\,(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false

                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MIniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new CopyPlugin([{
            from: 'src/assets',
            to: 'assets/'
        }]),
        new CleanWebpackPlugin(),
    ]
}