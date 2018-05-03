const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          CssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'main.css'
    })
  ]
}
