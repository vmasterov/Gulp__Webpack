'use strict';


const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;


module.exports = function(options) {
    return function() {
        return combine(
            gulp.src(options.srcFrom),
            gulp.dest(function(file) {
                return options.srcTo + '/' + file.base.match(/(?<=gulp-development[\\\/])\w+/)[0];
            })
        ).on('error', $.notify.onError());
    };
};