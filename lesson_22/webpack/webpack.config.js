const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/main.js',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};