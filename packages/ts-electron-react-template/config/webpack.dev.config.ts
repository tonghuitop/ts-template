import merge from 'webpack-merge'
import common from './webpack.common.config'
import { Configuration } from './types'

const config: Configuration = merge(common, {
  mode: 'development',
  devServer: {
    port: 2222
  },
  devtool: 'source-map'
})

export default config
