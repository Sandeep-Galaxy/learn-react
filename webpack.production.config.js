var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
    './source/App.js'
    ],
    output: {
        path: path.join(__dirname,'/dist/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
        test: /\.jsx?$/,
        loader: 'babel'
        }]
    },
    plugins: [
    new CopyWebpackPlugin([{
      from: './*.html'
    }])
  ]
};