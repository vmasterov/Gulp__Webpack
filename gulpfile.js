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
 * Task name: styles
 *
 * Development:
 * SCSS to CSS
 *
 * Production:
 * minification, rename, add hash to file name
 */
lazyRequireTask('styles', paths.tasks.styles, {
    srcFrom: paths.development.styles,
    srcTo: paths.production.styles,
    srcManifest: paths.common.manifest,
    srcManifestImages: paths.common.manifestImages,
    // scrServer: '/add_this_string_into_begin_of_path_to_every_image_or_fonts'
});



/**
 * Task name: styles-head
 *
 * Development:
 * get CSS from temp/gulp-head.css and inline it to page's header

 * Production:
 * minification
 */
lazyRequireTask('styles:head', paths.tasks.stylesHead, {
    srcFrom: paths.development.stylesHead,
    srcTo: paths.production.stylesHead,
    srcManifestImages: paths.common.manifestImages
    // scrServer: '/add_this_string_into_begin_of_path_to_every_image_or_fonts'
});



/**
 * Task name: styles:libs
 *
 * Development:
 * concatenation libs files
 *
 * Production:
 * minification, rename, add hash to file name
 */
lazyRequireTask('styles:libs', paths.tasks.stylesLibs, {
    srcFrom: paths.development.styleLibs,
    srcTo: paths.production.styles,
    srcManifest: paths.common.manifest
});



/**
 * Task name: js:chunks
 *
 * Development:
 * concatenation JS
 *
 * Production:
 * concatenation JS
 */
lazyRequireTask('js:chunks', paths.tasks.jsChunks, {
    srcFrom: paths.development.jsChunks,
    srcTo: paths.common.temp
});



/**
 * Task name: js:head
 *
 * Development:
 * concatenation JS from head section
 *
 * Production:
 * concatenation JS from head section
 */
lazyRequireTask('js:head', paths.tasks.jsHead, {
    srcFrom: paths.development.jsHead,
    srcTo: paths.common.temp
});



/**
 * Task name: js:libs
 *
 * Development:
 * concatenation JS libraries
 *
 * Production:
 * minification and rename
 */
lazyRequireTask('js:libs', paths.tasks.jsLibs, {
    srcFrom: paths.development.libs,
    srcTo: paths.production.js,
    manifest: paths.common.manifest
});



/**
 * Task name: js:webpack
 *
 * Development:
 * bundling JS chunks
 *
 * Production:
 * minification, rename, add hash to file name
 */
lazyRequireTask('js:webpack', paths.tasks.jsWebpack, {
    srcFrom: paths.development.jsChunks,
    srcTo: paths.production.js,
    entry: [
        paths.common.temp + '/gulp-main.js',
        paths.common.temp + '/gulp-head.js'
    ],
    includeBase: paths.development.base,
    manifest: paths.common.manifest
});



/**
 * Task name: images
 *
 * Development:
 * copy images to images and upload folders
 *
 * Production:
 * minification images
 */
lazyRequireTask('images', paths.tasks.images, {
    srcFrom: [paths.development.images, paths.development.upload],
    srcTo: paths.production.base,
    manifest: paths.common.manifest
});



/**
 * Fonts
 *
 * Task name: fonts
 *
 * Description:
 * Copy fonts
 * For production: copy fonts
 */
/*
lazyRequireTask('fonts', paths.tasks.fonts, {
    srcFrom: paths.development.fonts,
    srcTo: paths.production.fonts
});
*/


/**
 * Files
 *
 * Task name: files
 *
 * Description:
 * Copy files
 * For production: copy files
 */
/*
lazyRequireTask('files', paths.tasks.files, {
    srcFrom: paths.development.files,
    srcTo: paths.production.files
});
*/


/**
 * Task name: copy
 *
 * Development:
 * copy static assets
 *
 * Production:
 * copy static assets
 */
lazyRequireTask('copy', paths.tasks.copy, {
    srcFrom: paths.development.copy,
    srcTo: paths.production.base
});



/**
 * Task name: pages
 *
 * Development:
 * copy HTML or PHP files into destination folder, add critical path of styles to head of a page
 *
 * Production:
 * create the manifest file for JS chunks, JS modules, CSS, add compress version of critical path of styles to head of a page
 */
lazyRequireTask('pages', paths.tasks.pages, {
    srcFrom: paths.development.pages,
    srcTo: paths.production.base,
    srcManifestCss: paths.common.manifestCss,
    srcManifestCssLibs: paths.common.manifestCssLibs,
    srcManifestJs: paths.common.manifestJs,
    srcManifestJsModules: paths.common.manifestJsModules,
    srcManifestJsLibs: paths.common.manifestJsLibs,
    srcManifestImages: paths.common.manifestImages,
    srcStylesHead: paths.common.stylesHead,
});



/**
 * Task name: clean
 *
 * Development:
 * Remove gulp-production, manifest, temp folders
 *
 * Production:
 * Remove gulp-production, manifest, temp folders
 */
lazyRequireTask('clean', paths.tasks.clean, {
    srcFrom: [
        paths.production.base,
        paths.common.manifest,
        paths.common.temp
    ]
});



/**
 * Task name: watch
 *
 * Development:
 * Watching and updating CSS, HTML, images files if it was changed
 *
 * Production:
 * Watching and updating CSS, HTML, images files if it was changed
 */
lazyRequireTask('watch', paths.tasks.watch, {
    srcFrom: {
        watchStyles: paths.watch.styles,
        watchStylesHead: paths.watch.stylesHead,
        watchPages: paths.watch.pages,
        watchJs: paths.watch.js,
        watchImages: paths.watch.images
    }
});



/**
 * Task name: server
 *
 * Development:
 * A basic use is to watch all files in gulp-development and update connected browsers if a change occurs
 *
 * Production:
 * A basic use is to watch all files in gulp-development and update connected browsers if a change occurs
 */
lazyRequireTask('server', paths.tasks.server, {
    watch: paths.common.serverWatch,
    server: paths.production.base
});



/**
 * Task name: server:php
 *
 * Development:
 * Start default PHP server then start BrowserSync. A basic use is to watch all files in gulp-development and update connected browsers if a change occurs
 *
 * Production:
 * Start default PHP server then start BrowserSync. A basic use is to watch all files in gulp-development and update connected browsers if a change occurs
 */
lazyRequireTask('server:php', paths.tasks.serverPhp, {
    watch: paths.common.serverWatch,
    server: paths.production.base
});



/**
 * Build HTML project
 */
gulp.task(
    'development',
    gulp.series('clean',
        gulp.parallel(
            'styles',
            'styles:head',
            'styles:libs',
            'js:chunks',
            'js:head',
            'js:libs',
            'images',
            'copy'
            /*'fonts',
            'files'*/
        ),
        'js:webpack',
        'pages',
        gulp.parallel(
        'watch',
        'server'

        )
    )
);

gulp.task(
    'production',
    gulp.series(
        'clean',
        'images',
        gulp.parallel(
            'styles',
            'styles:head',
            'styles:libs',
            'js:chunks',
            'js:head',
            'js:libs',
            'copy'
            /*'fonts',
            'files'*/
        ),
        'js:webpack',
        'pages',
        'server'
    )
);



/**
 * Build PHP project
 */

gulp.task(
    'development:php',
    gulp.series('clean',
        gulp.parallel(
            'styles',
            'styles:head',
            'styles:libs',
            'js:chunks',
            'js:head',
            'js:libs',
            'images',
            'copy'
            /*'fonts',
            'files'*/
        ),
        'js:webpack',
        'pages',
        gulp.parallel(
            'watch',
            'server:php'
        )
    )
);

gulp.task(
    'production:php',
    gulp.series(
        'clean',
        'images',
        gulp.parallel(
            'styles',
            'styles:head',
            'styles:libs',
            'js:chunks',
            'js:head',
            'js:libs',
            'copy'
            /*'fonts',
            'files'*/
        ),
        'js:webpack',
        'pages',
        'server:php'
    )
);