const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/, // tells webpack "hey, treat this filename as a module"
        use: ['style-loader', 'css-loader', 'sass-loader'], // defines what loaders are applied to the file, order is important! are
        // loaded from right to left
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html',
      favicon: './src/assets/images/favicon.ico'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images", to: "assets" }
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};