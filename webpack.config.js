var path = require('path');

module.exports = {
    context: path.join(__dirname, 'exercises'),
    entry: {
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-2-Console/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-2-Console/src/app.js',
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-3-Data-Types/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-3-Data-Types/src/app.js',
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-4-Math-Operators/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-4-Math-Operators/src/app.js',
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-5-Properties/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-5-Properties/src/app.js',
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-6-Built-in-Methods/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-6-Built-in-Methods/src/app.js',
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-7-Libraries/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-7-Libraries/src/app.js',
        './exercises/1-Introduction/1-1-Introduction-to-JavaScript/1-1-8-Comments/dist/bundle': './1-Introduction/1-1-Introduction-to-JavaScript/1-1-8-Comments/src/app.js',
        './exercises/1-Introduction/1-2-Variables/1-2-1-Variables/dist/bundle': './1-Introduction/1-2-Variables/1-2-1-Variables/src/app.js', 
        './exercises/1-Introduction/1-2-Variables/1-2-2-Create-a-Variable-const/dist/bundle': './1-Introduction/1-2-Variables/1-2-2-Create-a-Variable-const/src/app.js',
        './exercises/1-Introduction/1-2-Variables/1-2-3-Create-a-Variable-let/dist/bundle': './1-Introduction/1-2-Variables/1-2-3-Create-a-Variable-let/src/app.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        publicPath: '/'
    }
};