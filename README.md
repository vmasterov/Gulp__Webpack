## Tasks
### _paths.js
File with all paths that the project use.

***

All tasks launches from gulpfile.js and get 'options' argument that contain necessary paths.

***

### clean.js
#### Development, production:
* will be launched before any build, 
* will remove folders from 'options.srcFrom'.

***

### images.js
#### Development:
* copy project's images to the folder from 'options.srcFrom'.

#### Production:
The same as in development plus:
* add hashes to files names,
* optimization image,
* write image info to the manifest.

***

### js-chunks.js and js-head.js
#### Development, production:
* concatenate files from 'options.srcFrom' to gulp-main.js,
* move it to folder from 'options.srcTo' ('temp' folder), 
* later js-webpack.js will take it from this folder for next manipulation. (Since the webpack needs one file, and there are many chunks, you must first combine them).

***

### js-webpack.js
#### Development:
* pick up files from 'options.entry' array. (This files are located into 'temp' folder. js-chunks.js and js-head.js put it there), 
* add sourcemap to it, 
* Babel-loader transpile modern JS to current version,
* uglify it,
* put it into 'options.srcTo'.

#### Production:
The same as in development plus:
* will be added hashes to files.

***

### js-libs.js
#### Development:
* concatenate files from 'options.srcFrom' to gulp-main.js,
* move it to folder from 'options.srcTo'.

#### Production:
The same as in development plus:
* uglify it,
* rename (add '.min' suffix),
* write file name to the manifest.

***

### pages.js
#### Development:
* move files to folder from 'options.srcTo',
* inject critical path styles as a string to head section of pages.

#### Production:
The same as in development plus:
* replace normal names of JS, CSS, images and other files with hashes names from the proper manifest.

***

### server.js
#### Development and production:
* launch BrowserSync,
* pass 'server' option from 'options.server',
* add 'watch' listener to BrowserSync 'change' event.

***

### server-php.js
#### Development and production:
* launch BrowserSync
* launch default php server (php -S localhost:8000),
* set 'base' option equal './gulp-production',
* use proxy for connection,
* add 'watch' listener to BrowserSync 'change' event.

***

### styles.js
#### Development:
* move files to folder from 'options.srcTo',
* add sourcemap to it,
* replace SCSS with CSS.

#### Production:
The same as in development plus:
* replace normal background images paths with hashes paths,
* write CSS file name to the manifest.

***

### styles-head.js
#### Development:
* move files to folder from 'options.srcTo' ('temp' folder),
* replace SCSS with CSS.

#### Production:
The same as in development plus:
* replace normal background images paths with hashes paths,
* replace SCSS with CSS, 
* minify it.

***

### styles-libs.js
#### Development:
* concatenate files from 'options.srcFrom' to gulp-libs.css,
* move it to folder from 'options.srcTo'.

#### Production:
The same as in development plus:
* rename (add '.min' suffix),
* write file name to the manifest.

***

### watch.js
#### Development and production:
* watch at changes into specify paths and launch proper task.

***


***
***
***



# Common build

## Requirements

#### NodeJS >=8.11.4
* **[Download](https://nodejs.org/en/)** 
* **[Screencast](https://www.youtube.com/watch?v=ILpS4Fq3lmw&list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg)**

***

#### NPM >=6.4.1
* **[Site](https://www.npmjs.com/)** 

***

#### Gulp
* **CLI version** >=2.2.0
* **Local version** >=4.0.2
* **[Screencast](https://www.youtube.com/watch?v=uPk6lQoTThE&list=PLDyvV36pndZFLTE13V4qNWTZbeipNhCgQ)**

*** 

## NPM scripts


### Development build
npm run d

***

### Production build
npm run p

***

### Testing build
npm run t

***

### Testing another scripts
Open file into a browser: test/test-modules/test-module.spec.html

***

## Proper links

### NodeJS:
* **[Download](https://nodejs.org/en/)** 
* **[Screencast](https://www.youtube.com/watch?v=ILpS4Fq3lmw&list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg)**

***

### NPM:
* **[Site](https://www.npmjs.com/)** 

***

### Gulp:
* **[Screencast](https://www.youtube.com/watch?v=uPk6lQoTThE&list=PLDyvV36pndZFLTE13V4qNWTZbeipNhCgQ)**

***

### Webpack:
* **[Site](https://webpack.js.org/)**
* **[Screencast](https://www.youtube.com/watch?v=kLMjOd-x0aQ&list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn)**

***

### BrowserSync (server.js)
* **[Site](https://www.browsersync.io/)**

***

### Babel:
* **[Site](https://babeljs.io/)**

***

### Chai + Mocha (testing):
* **[Article 1](https://learn.javascript.ru/testing)**
* **[Article 2](https://dev.to/bnorbertjs/my-nodejs-setup-mocha--chai-babel7-es6-43ei)**

***

If any links don't work, use anonymizer
