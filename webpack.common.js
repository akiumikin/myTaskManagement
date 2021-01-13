const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "index.html"
});

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/typescripts/index.tsx',
  plugins: [
    new CleanWebpackPlugin(),
    htmlPlugin,
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
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src/typescripts'),
    ],
    alias: {
      tsRoot: path.resolve('./src/typescripts'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: ASSET_PATH,
    filename: 'index.js',
  },
};
