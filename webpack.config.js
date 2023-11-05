const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    background: "./background.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
