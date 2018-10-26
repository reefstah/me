const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
  entry: './src/client.entry.js',
  plugins: [
    // This plugins generates  in the
    // output directory.
    new VueSSRClientPlugin()
  ],
  optimization: {
    splitChunks: {}
}
});
