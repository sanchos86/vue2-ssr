import webpack from 'webpack';
import WebpackMerge from 'webpack-merge';
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin.js';
import base from './webpack.base.config.js';

const { merge } = WebpackMerge;

export default merge(base, {
  entry: './src/entry-client.js',
  plugins: [
    new VueSSRClientPlugin(),
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': JSON.stringify('client')
    })
  ]
});
