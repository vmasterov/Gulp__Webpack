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
 * SCSS to CSS
 * For production: minification, rename, add hash to file name
 */
lazyRequireTask('styles', paths.tasks.styles, {
    srcFrom: paths.development.styles,
    srcTo: paths.production.styles,
    srcManifest: paths.common.manifest,
    srcManifestImages: paths.common.manifestImages,
    // scrServer: '/add_this_string_into_begin_of_path_to_every_image_or_fonts'
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
 * JavaScript chunks
 *
 * Task name: js:chunks
 *
 * Description:
 * Concatenation JS
 * For production: concatenation JS
 */
lazyRequireTask('js:chunks', paths.tasks['js:chunks'], {
    srcFrom: paths.development['js:chunks'],
    srcTo: paths.common.temp
});



/**
 * JavaScript libs
 *
 * Task name: js:libs
 *
 * Description:
 * Concatenation JS libraries
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
 * Bundling JS chunks
 * For production: minification, rename, add hash to file name
 */
lazyRequireTask('js:webpack', paths.tasks['js:webpack'], {
    srcFrom: paths.development['js:chunks'],
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
 * For production: copy fonts
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
 * Copy images to images and upload folders
 * For production: minification images
 */
lazyRequireTask('images', paths.tasks.images, {
    srcFrom: [paths.development.images, paths.development.upload],
    srcTo: paths.production.base,
    manifest: paths.common.manifest
});



/**
 * Files
 *
 * Task name: files
 *
 * Description:
 * Copy files
 * For production: copy files
 */
lazyRequireTask('files', paths.tasks.files, {
    srcFrom: paths.development.files,
    srcTo: paths.production.files
});



/**
 * PAGES
 *
 * Task name: pages
 *
 * Description:
 * Copy HTML or PHP files into destination folder
 * For production: create the manifest file for JS chunks, JS modules, CSS
 */
lazyRequireTask('pages', paths.tasks.pages, {
    srcFrom: paths.development.pages,
    srcTo: paths.production.pages,
    srcManifestCss: paths.common.manifestCss,
    srcManifestCssLibs: paths.common.manifestCssLibs,
    srcManifestJs: paths.common.manifestJs,
    srcManifestJsModules: paths.common.manifestJsModules,
    srcManifestJsLibs: paths.common.manifestJsLibs,
    srcManifestImages: paths.common.manifestImages
});



/**
 * Clean
 *
 * Task name: clean
 *
 * Description:
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
 * Watch
 *
 * Task name: watch
 *
 * Description:
 * Watching and updating CSS, HTML, images files if it was changed
 */
lazyRequireTask('watch', paths.tasks.watch, {
    srcFrom: {
        watchStyles: paths.watch.styles,
        watchPages: paths.watch.pages,
        watchJs: paths.watch.js,
        watchImages: paths.watch.images
    }
});



/**
 * Serve
 *
 * Task name: server
 *
 * Description:
 * A basic use is to watch all files in gulp-development and update connected browsers if a change occurs
 */
lazyRequireTask('server', paths.tasks.server, {
    watch: paths.common.serverWatch,
    server: paths.production.base
});



/**
 * Server PHP
 *
 * Task name: server:php
 *
 * Description:
 * Start default PHP server then start BrowserSync.
 * A basic use is to watch all files in gulp-development and update connected browsers if a change occurs
 */
lazyRequireTask('server:php', paths.tasks['server:php'], {
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
            'styles:libs',
            'js:chunks',
            'js:libs',
            'fonts',
            'images',
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

gulp.task(
    'production',
    gulp.series(
        'clean',
        'images',
        gulp.parallel(
            'styles',
            'styles:libs',
            'js:chunks',
            'js:libs',
            'fonts',
            'files'
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
            'styles:libs',
            'js:chunks',
            'js:libs',
            'fonts',
            'images',
            'files'
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
            'styles:libs',
            'js:chunks',
            'js:libs',
            'fonts',
            'files'
        ),
        'js:webpack',
        'pages',
        'server:php'
    )
);