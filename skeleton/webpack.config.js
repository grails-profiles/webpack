var path = require('path');

module.exports = {
    entry: {
        index: './src/main/webapp/index.js'
    },
    output: {
        path: './grails-app/assets/javascripts',
        publicPath: '/assets/',
        filename: 'bundle.js'
    } 
};
