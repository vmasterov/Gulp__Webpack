'use strict';


const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const combine = require('stream-combiner2').obj;


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


module.exports = function(options) {
    return function() {
        return combine(
            gulp.src(options.srcFrom),
            $.if(!isDevelopment, combine(
                $.rev(),
                $.imagemin(
                    [
                        imageminJpegRecompress({
                            loops: 4,
                            quality: 'low'
                        }),
                        imageminPngquant({
                            quality: [0.3, 0.5]
                        }),
                        $.imagemin.optipng({
                            optimizationLevel: 7
                        })
                    ],
                    {
                        verbose: true
                    })
                )
            ),
            gulp.dest(function (file) {
                const folder = file.dirname.match(/(?:\\|\/)([0-9A-Za-zА-ЯЁа-яё_@$*()={}'"|<>:^,!.&?`#%№~ +-]+)$/);

                switch(folder[1]) {
                    case 'images':
                        return options.srcTo[0];
                    case 'upload':
                        return options.srcTo[1];
                    default:
                        return options.srcTo[0];
                }
            }),
            $.if(!isDevelopment, combine(
                $.rev.manifest('images.json'),
                gulp.dest(options.manifest))
            )
        );
    };
};