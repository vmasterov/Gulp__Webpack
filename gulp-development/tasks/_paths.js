module.exports = {
    development: {
        base: 'gulp-development',
        styles: 'gulp-development/scss/gulp-main.scss',
        pages: 'gulp-development/html/**/*.+(php|html)',
        'js:pages': ['gulp-development/js/modules/**/*.js', 'gulp-development/js/pages/**/*.js'],
        // 'js:modules': 'gulp-development/js/modules/**/*.js',
        libs: [
            'node_modules/jquery/dist/jquery.min.js'
        ],
        styleLibs: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        fonts: 'gulp-development/fonts/**/*.*',
        images: 'gulp-development/images/**/*.*',
        upload: 'gulp-development/upload/**/*.*',
        files: 'gulp-development/files/**/*.*'
    },

    watch: {
        pages: 'gulp-development/html/**/*.+(php|html)',
        styles: 'gulp-development/scss/**/*.*',
        js: ['gulp-development/js/modules/**/*.js', 'gulp-development/js/pages/**/*.js'],
        // 'js:modules': 'gulp-development/js/modules/**/*.js'
    },

    production: {
        base: 'gulp-production',
        pages: 'gulp-production',
        styles: 'gulp-production/css',
        js: 'gulp-production/js',
        fonts: 'gulp-production/fonts',
        images: 'gulp-production/images',
        upload: 'gulp-production/upload',
        files: 'gulp-production/files'
    },

    tasks: {
        styles: './gulp-development/tasks/styles',
        'styles:libs': './gulp-development/tasks/styles-libs',
        'js:pages': './gulp-development/tasks/js-pages',
        // 'js:modules': './gulp-development/tasks/js-modules',
        'js:libs': './gulp-development/tasks/js-libs',
        'js:webpack': './gulp-development/tasks/js-webpack',
        pages: './gulp-development/tasks/pages',
        fonts: './gulp-development/tasks/fonts',
        images: './gulp-development/tasks/images',
        upload: './gulp-development/tasks/upload',
        files: './gulp-development/tasks/files',
        clean: './gulp-development/tasks/clean',
        watch: './gulp-development/tasks/watch',
        server: './gulp-development/tasks/server'
    },

    common: {
        manifest: './gulp-development/manifest',
        manifestCss: './gulp-development/manifest/css.json',
        manifestCssLibs: './gulp-development/manifest/css-libs.json',
        manifestJs: './gulp-development/manifest/js.json',
        manifestJsModules: './gulp-development/manifest/js-modules.json',
        manifestJsLibs: './gulp-development/manifest/js-libs.json',

        temp: './gulp-development/temp',
        serverWatch: './gulp-development/**/*.*'
    }
};