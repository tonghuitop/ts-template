import * as path from 'path'
import 'webpack-dev-server'
import { Configuration } from './types'

const config: Configuration = {
  entry: {
    app: ['./src/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  // 模块解析
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

export default config
