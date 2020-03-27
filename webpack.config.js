const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
          }
        ]
      }, {
        test: /\.css$/i,
        loader: ['style-loader', 'css-loader'], // translates CSS into CommonJS
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'main.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
