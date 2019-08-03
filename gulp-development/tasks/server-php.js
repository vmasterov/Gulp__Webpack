'use strict';

const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();


module.exports = function(options) {
    return function() {
        $.connectPhp.server({
            base: './gulp-production'
        }, function (){
            browserSync.init({
                proxy: '127.0.0.1:8000'
            });
        });

        browserSync.watch(options.watch).on('change', browserSync.reload);
    }
};