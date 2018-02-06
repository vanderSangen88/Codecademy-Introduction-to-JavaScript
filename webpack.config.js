var path = require('path');

module.exports = {
    context: path.join(__dirname, 'excercises'),
    entry: {
        './excercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-2-Console/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-2-Console/src/app.js',
        './excercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-3-Data-Types/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-3-Data-Types/src/app.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        publicPath: '/excercises'
    }
};