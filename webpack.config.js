// To instruct web pack to transpile any code that goes into our bundle before placing it in the "entry"
const path = require('path')

module.exports = {
  entry: "./src/index.js", // where we want to reference our bundle file in it
  output: {
    path: path.resolve(__dirname, "dist/assets"), // the path where webpack should place the bundle file
    filename: "bundle.js", // the filename
    publicPath: "assets" // where the dev server knows to find this file on the client
  },
  devServer: { // dev server configs
    inline: true, // tells the webpack dev server to use the client entry point so we can browse our file on e.g localhost:3000
    contentBase: "./dist", // files to be found in this folder (index.html will be run automatically)
    port: 3000 // the port to run the app on
  },
  module: { // how to transpile code that goes into this bundle
    rules: [ // loaders will be used by webpack when they import modules to transpile them e.g. ES6 to ES5
      { // Add babel loader
        test: /\.js$/, // Regular Expression to say any files that ends with .js
        exclude: /(node_modules)/, // to exclude importing these modules for this loader
        use: {
          loader: 'babel-loader', // to tell webpack which loader to use (babel-loader)
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
