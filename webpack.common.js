const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/typescripts/index.tsx',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$|\.ts?$/,
        use: [{
          loader: 'ts-loader',
        }],
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
    extensions: ['.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index.js',
  },
};
