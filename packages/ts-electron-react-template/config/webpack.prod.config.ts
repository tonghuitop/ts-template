import * as webpack from 'webpack'
import * as HtmlWebPackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import merge from 'webpack-merge'
import common from './webpack.common.config'

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ]
})

export default config
