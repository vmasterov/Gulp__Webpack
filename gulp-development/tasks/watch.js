'use strict';


const gulp = require('gulp');


module.exports = function(options) {
    return function() {
        gulp.watch(options.srcFrom.watchPages, gulp.series('pages'));
        gulp.watch(options.srcFrom.watchStyles, gulp.series('styles'));
        gulp.watch(options.srcFrom.watchJs, gulp.series('js:pages'));
        // gulp.watch(options.srcFrom.watchJsModules, gulp.series('js:modules'));

        // gulp.watch(options.srcFrom.watchHtml, gulp.series('html'));
    };
};
