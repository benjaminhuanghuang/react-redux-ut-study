const path = require("path");
// create html based on a template and and import bundle.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3721,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "assets/index.html",
      favicon: "assets/favicon.ico",
    }),
  ],
};

module.exports = config;