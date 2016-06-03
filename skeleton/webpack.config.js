var path = require('path');

module.exports = {
    entry: {
        index: './src/main/js/index.js'
    },
    output: {
        path: './grails-app/assets/javascripts',
        publicPath: '/assets/',
        filename: 'bundle.js'
    } 
};
