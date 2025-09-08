const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // cleans old build files
    library: 'createCarousel',
    libraryTarget: 'umd' // so it can be used as module or in browser
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(png|jpe?g|avif|gif|svg)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  devServer: {
    static: './dist',
    port: 8080,
    open: true
  }
};
