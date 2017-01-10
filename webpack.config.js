module.exports = {
  entry: './app.js',

  output: {
    //path: 'build',
    filename:'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        //include: paths.appSrc,
        loaders: ["style", "css", "sass"]
      },
    ]
  }

};
