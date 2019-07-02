'use strict';


const gulp = require('gulp');


/**
 * Paths
 */
const paths = require('./gulp-development/tasks/_paths');



/**
 * Function for download tasks by demand
 */
function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        let task = require(path).call(this, options);

        return task(callback);
    });
}



/**
 * Styles
 *
 * Task name: styles
 *
 * Description:
 * SCSS to CSS, autoprefix
 * For production: minification, rename, add hash to file name
 */
lazyRequireTask('styles', paths.tasks.styles, {
    srcFrom: paths.development.styles,
    srcTo: paths.production.styles,
    srcManifest: paths.common.manifest
});



/**
 * Styles libs
 *
 * Task name: styles:libs
 *
 * Description:
 * Concatenation libs files
 * For production: minification, rename, add hash to file name
 */
lazyRequireTask('styles:libs', paths.tasks['styles:libs'], {
    srcFrom: paths.development.styleLibs,
    srcTo: paths.production.styles,
    srcManifest: paths.common.manifest
});



/**
 * JavaScript pages
 *
 * Task name: js:pages
 *
 * Description:
 * Bundling JS
 * For production: minification, rename, add hash to file name
 */
lazyRequireTask('js:pages', paths.tasks['js:pages'], {
    srcFrom: paths.development['js:pages'],
    srcTo: paths.common.temp
});



/**
 * JavaScript modules
 *
 * Task name: js:modules
 *
 * Description:
 * Bundling JS modules
 * For production: minification, rename, add hash to file name
 */
/*
lazyRequireTask('js:modules', paths.tasks['js:modules'], {
    srcFrom: paths.development.jsModules,
    srcTo: paths.production.js,
    manifest: paths.common.manifest
});
*/


/**
 * JavaScript libs
 *
 * Task name: js:libs
 *
 * Description:
 * Bundling JS libraries
 * For production: minification and rename
 */
lazyRequireTask('js:libs', paths.tasks['js:libs'], {
    srcFrom: paths.development.libs,
    srcTo: paths.production.js,
    manifest: paths.common.manifest
});



/**
 * JavaScript webpack
 *
 * Task name: js:webpack
 *
 * Description:
 * Bundling JS
 * For production: minification, rename, add hash to file name
 */
lazyRequireTask('js:webpack', paths.tasks['js:webpack'], {
    srcFrom: paths.development['js:pages'],
    srcTo: paths.production.js,
    entry: paths.common.temp + '/gulp-main.js',
    includeBase: paths.development.base,
    manifest: paths.common.manifest
});



/**
 * Fonts
 *
 * Task name: fonts
 *
 * Description:
 * Copy fonts
 * For production: -
 */
lazyRequireTask('fonts', paths.tasks.fonts, {
    srcFrom: paths.development.fonts,
    srcTo: paths.production.fonts
});



/**
 * Images
 *
 * Task name: images
 *
 * Description:
 * Copy images
 * For production: -
 */
lazyRequireTask('images', paths.tasks.images, {
    srcFrom: paths.development.images,
    srcTo: paths.production.images
});



/**
 * Upload
 *
 * Task name: upload
 *
 * Description:
 * Copy content of upload folder
 * For production: -
 */
lazyRequireTask('upload', paths.tasks.upload, {
    srcFrom: paths.development.upload,
    srcTo: paths.production.upload
});



/**
 * Files
 *
 * Task name: files
 *
 * Description:
 * Copy Copy content of files folder
 * For production: -
 */
lazyRequireTask('files', paths.tasks.files, {
    srcFrom: paths.development.files,
    srcTo: paths.production.files
});




/**
 * HTML
 *
 * Task name: html
 *
 * Description:
 * Copy HTML files into destination folder
 * For production: create the manifest file for JS, JS modules, CSS (for right path resolve)
 */
lazyRequireTask('pages', paths.tasks.pages, {
    srcFrom: paths.development.pages,
    srcTo: paths.production.pages,
    srcManifestCss: paths.common.manifestCss,
    srcManifestCssLibs: paths.common.manifestCssLibs,
    srcManifestJs: paths.common.manifestJs,
    srcManifestJsModules: paths.common.manifestJsModules,
    srcManifestJsLibs: paths.common.manifestJsLibs
});



/**
 * Clean
 *
 * Task name: clean
 *
 * Description:
 * Remove the destination folder
 */
lazyRequireTask('clean', paths.tasks.clean, {
    srcFrom: paths.production.base,
    srcManifest: paths.common.manifest
});



/**
 * Watch
 *
 * Task name: watch
 *
 * Description:
 * Watching watching and updating CSS, HTML, images files if it was changed
 */
lazyRequireTask('watch', paths.tasks.watch, {
    srcFrom: {
        watchStyles: paths.watch.styles,
        watchPages: paths.watch.pages,
        watchJs: paths.watch.js,
        watchJsModules: paths.watch['js:modules']
    }
});



/**
 * Serve
 *
 * Task name: serve
 *
 * Description:
 * A basic use is to watch all CSS and HTML files and update connected browsers if a change occurs
 */
lazyRequireTask('server', paths.tasks.server, {
    watch: paths.common.serverWatch,
    server: paths.production.base
});


gulp.task(
    'development',
    gulp.series('clean',
        gulp.parallel(
            'styles',
            'styles:libs',
            'js:pages',
            // 'js:modules',
            'js:libs',
            'fonts',
            'images',
            'upload',
            'files'
        ),
        'js:webpack',
        'pages',
        gulp.parallel(
        'watch',
        'server'
        )
    )
);
/*
gulp.task(
    'production',
    gulp.series(
        'clean',
        gulp.parallel(
            'styles',
            'styles:libs',
            'js',
            'js:modules',
            'js:libs',
            'fonts',
            'images',
            'upload',
            'files'
        ),
        'pages'
    )
);
*/