module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
          },
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };