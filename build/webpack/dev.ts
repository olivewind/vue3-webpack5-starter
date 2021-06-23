import merge from 'webpack-merge';
import * as Webpack from 'webpack';
import common from './common';

export default merge(common, {
  mode: 'development',
  entry: ['webpack-dev-server/client', 'webpack/hot/only-dev-server', './main.ts'],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 5001,
    proxy: {
      '/api': {
        target: 'http://search.datagrand.cn',
        changeOrigin: true
      }
    }
  },
  devtool: 'cheap-module-source-map',
  plugins: [new Webpack.HotModuleReplacementPlugin()]
} as Webpack.Configuration);
