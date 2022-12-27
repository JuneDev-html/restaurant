const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", //2. injects styles into DOM
          "css-loader", //1.sturns css into common js
        ],
      },
    ],
  },
};
