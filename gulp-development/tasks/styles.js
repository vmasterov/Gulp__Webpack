'use strict';


const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const sassCompiler = require('node-sass');
const combine = require('stream-combiner2').obj;


$.sass.compiler = sassCompiler;


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
    return function() {
        return combine(
            gulp.src(options.srcFrom),
            $.if(isDevelopment, $.sourcemaps.init()),
            $.sass(),
            $.if(isDevelopment, $.sourcemaps.write()),
            $.if(!isDevelopment, combine(
                $.rev(),
                $.cleanCss(),
                $.rename({suffix: ".min"})
            )),
            gulp.dest(options.srcTo),
            $.if(!isDevelopment, combine(
                $.rev.manifest('css.json'),
                gulp.dest(options.srcManifest)
            ))
        ).on('error', $.notify.onError());
    };
};