const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, "build"),
      publicPath: "/",
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  proxy: {
    "/api/**": {
      target: "http://localhost:3000/",
      secure: false,
    },
    "/assets/**": {
      target: "http://localhost:3000/",
      secure: false,
    },
  },
};
