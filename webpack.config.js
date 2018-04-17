const path = require('path');
module.exports = {
    mode: 'development',
    entry: ["babel-polyfill", './js/main.js'],
    //entry: ["babel-polyfill", "./app/js"]
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {

        //loaders: [{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                //presets: ['es2015']
                //presets: ["@babel/preset-es2017"]
            }
        }]
    }
}
  