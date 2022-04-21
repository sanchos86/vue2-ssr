import webpack from 'webpack';
import WebpackMerge from 'webpack-merge';
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin.js';
import nodeExternals from 'webpack-node-externals';
import base from './webpack.base.config.js';

const { merge } = WebpackMerge;

export default merge(base, {
  entry: './src/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externalsPresets: { node: true },
  externals: nodeExternals({
    allowlist: /\.css$/,
  }),
  plugins: [
    new VueSSRServerPlugin(),
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': JSON.stringify('server')
    })
  ]
});
