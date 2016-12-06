module.exports = {
  entry: {
    app: "./entry.js",
    static: "./why.js"
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
