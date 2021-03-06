const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
   },
   module: {
      rules: [
         /* style and css loader */
         {
            test: /\.css$/,
            use: [
               {
                  loader: "style-loader"
               },
               {
                  loader: "css-loader"
               },
               {
                  loader: "postcss-loader",
                  options: {
                     ident: 'postcss',
                     plugins: [
                        require('autoprefixer')
                     ]
                  }
               }
            ]
         },
         /* assets file management loader */
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader',
            ],
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
               'file-loader',
            ],
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html",
         filename: "index.html"
      }),
      new Dotenv()
   ]
}