'use strict';


const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const sassCompiler = require('node-sass');
const combine = require('stream-combiner2').obj;


$.sass.compiler = sassCompiler;


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {
    let manifest;
    const root = process.cwd();

    if (!isDevelopment) {
        manifest = require(root + '/' + options.srcManifestImages);
    }

    function url(urlLiteral) {

        const filePathArray = urlLiteral.match(/(?=\\|\/)?([0-9A-Za-zА-ЯЁа-яё_@$*()={}'"|<>:^,!.&?`#%№~ +-]+)(?=\\|\/)?/g).reverse();
        let imageUrl = '';
        let imageUrlHash = '';


        if (filePathArray[filePathArray.length - 1] === 'images' || filePathArray[filePathArray.length - 1] === 'upload') {
            for (let i = filePathArray.length - 1, l = 0; i >= l; i--) {
                (i !== 0) ? imageUrl += filePathArray[i] + '/' : imageUrl += filePathArray[i];
            }

            imageUrlHash = '/' + manifest[imageUrl];
        }

        else{
            imageUrlHash = urlLiteral;
        }

        // If local path and server path is different
        if (options.scrServer) {
            imageUrlHash = options.scrServer + imageUrlHash;
        }


        return imageUrlHash;
    }


    return function() {
        return combine(
            gulp.src(options.srcFrom),
            $.sass(),
            $.if(!isDevelopment, $.cssReplaceUrl({replace: url})),
            $.if(!isDevelopment, $.cleanCss()),
            gulp.dest(options.srcTo)
        ).on('error', $.notify.onError());
    };
};