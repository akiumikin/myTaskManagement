const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/typescripts/main.tsx',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$|\.ts?$/,
        use: [{
          loader: 'ts-loader',
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', // linkタグに出力する機能
          'css-loader?modules', // CSSをバンドルするための機能
          {
            loader: 'postcss-loader', // PostCSSのための設定
            options: {
              plugins: [
                require('autoprefixer')({
                  grid: true,
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src/typescripts'),
      path.resolve('./src/stylesheets'),
    ],
    alias: {
      tsRoot: path.resolve('./src/typescripts'),
      styleRoot: path.resolve('./src/stylesheets'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.css', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'main.js',
  },
};
