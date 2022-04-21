import path from 'path';
import VueLoader from 'vue-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const { VueLoaderPlugin } = VueLoader;

export default {
  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],
};
