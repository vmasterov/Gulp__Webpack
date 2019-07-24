module.exports = {
    development: {
        base: 'gulp-development',

        pages: 'gulp-development/pages/**/*.+(php|html)',

        styles: 'gulp-development/styles/*.scss',
        styleLibs: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],

        jsChunks: [
            'gulp-development/js/modules/**/*.js',
            'gulp-development/js/chunks/**/*.js'
        ],
        libs: [
            'node_modules/jquery/dist/jquery.min.js'
        ],
        jsHead: [
            'gulp-development/js/head/**/*.js'
        ],

        images: 'gulp-development/images/**/*.*',
        upload: 'gulp-development/upload/**/*.*',

        files: 'gulp-development/files/**/*.*',
        fonts: 'gulp-development/fonts/**/*.*'
    },


    watch: {
        pages: 'gulp-development/pages/**/*.+(php|html)',
        styles: 'gulp-development/styles/**/*.*',
        js: [
            'gulp-development/js/modules/**/*.js',
            'gulp-development/js/chunks/**/*.js',
            'gulp-development/js/head/**/*.js'
        ],
        images: [
            'gulp-development/images/**/*.*',
            'gulp-development/upload/**/*.*'
        ]
    },


    production: {
        base: 'gulp-production',

        pages: 'gulp-production',

        styles: 'gulp-production/css',

        js: 'gulp-production/js',

        files: 'gulp-production/files',
        fonts: 'gulp-production/fonts'
    },


    tasks: {
        pages: './gulp-development/tasks/pages',

        styles: './gulp-development/tasks/styles',
        stylesLibs: './gulp-development/tasks/styles-libs',

        jsChunks: './gulp-development/tasks/js-chunks',
        jsLibs: './gulp-development/tasks/js-libs',
        jsWebpack: './gulp-development/tasks/js-webpack',
        jsHead: './gulp-development/tasks/js-head',

        images: './gulp-development/tasks/images',
        upload: './gulp-development/tasks/upload',

        files: './gulp-development/tasks/files',
        fonts: './gulp-development/tasks/fonts',

        clean: './gulp-development/tasks/clean',

        watch: './gulp-development/tasks/watch',

        server: './gulp-development/tasks/server',

        serverPhp: './gulp-development/tasks/server-php',
    },


    common: {
        manifest: './gulp-development/manifest',

        manifestCss: './gulp-development/manifest/css.json',
        manifestCssLibs: './gulp-development/manifest/css-libs.json',

        manifestJs: './gulp-development/manifest/js.json',
        manifestJsModules: './gulp-development/manifest/js-modules.json',
        manifestJsLibs: './gulp-development/manifest/js-libs.json',
        manifestJsHead: './gulp-development/manifest/js-head.json',

        manifestImages: 'gulp-development/manifest/images.json',

        temp: './gulp-development/temp',

        serverWatch: './gulp-development/**/*.*'
    }
};
