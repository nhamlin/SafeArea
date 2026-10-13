module.exports = {
  context: __dirname,
  entry: "./App.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.css$/, loader: "style-loader" },
      { test: /\.css$/, loader: "css-loader" },
    ],
  },
};

// Need to redo this for sass and js files separately
