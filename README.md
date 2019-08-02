## Tasks
### _paths.js
File with all paths that the project use.

***

All tasks launches from gulpfile.js and get 'options' argument that contain necessary paths.

***

### clean.js
Will be launched before any build. Will remove folders from 'options.srcFrom'.

***

### images.js
#### Development:
Copy project's images to the folder from 'options.srcFrom'.

#### Production:
Add hash to files names, optimization images, write image info to the manifest.

***

### js-chunks.js and js-head.js
#### Development, production:
Concatenate files from 'options.srcFrom' to gulp-main.js and move it to folder from 'options.srcTo' ('temp' folder). Later js-webpack.js will take it from this folder for next manipulation 

***

### js-webpack.js
#### Development:
Pick up files from 'options.entry' array. (This files are located into 'temp' folder. js-chunks.js put it there). Babel-loader transpile modern JS to current version, uglify it and put it into 'options.srcTo'.

#### Production:
The same as in development plus will be added hashes to files

***

### js-libs.js
#### Development:
Concatenate files from 'options.srcFrom' to gulp-main.js and move it to folder from 'options.srcTo'.

#### Production:
The same as in development plus uglify it, rename (add '.min' suffix), write file name to the manifest.

***

### pages.js
#### Development:
Move files to folder from 'options.srcTo'. Inject critical path styles as a string to head section of pages

#### Production:
The same as in development plus replace normal names with hashes names from the proper manifest.

***

### server.js
#### Development and production:
Launch BrowserSync. Pass 'server' option from 'options.server'. Add 'watch' listener to 'change' event.

***


***
***
***



# Common build

## Requirements

#### NodJS >=8.11.4
* **Download:** https://nodejs.org/en/
* **Screencast:** https://www.youtube.com/watch?v=ILpS4Fq3lmw&list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg

***

#### NPM >=6.4.1
* **Site:** https://www.npmjs.com/

***

#### Gulp
* **CLI version:** >=2.2.0
* **Local version:** >=4.0.2
* **Screencast**: https://www.youtube.com/watch?v=uPk6lQoTThE&list=PLDyvV36pndZFLTE13V4qNWTZbeipNhCgQ

***

#### Webpack >=4.35.2
* **Site:** https://webpack.js.org/
* **Screencast:** https://www.youtube.com/watch?v=kLMjOd-x0aQ&list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn

*** 

## Tasks

### Build JS

**ES6-modules (js-webpack.js)**
* Webpack + Babel

**Babel**
* **Site:** https://babeljs.io/

***

**JS-modules**	(js-modules.js)

***

**JS-chunks** (js-chunks.js)

***

**JS-libs** (js-libs.js)
Gulp

***

### Image optimazing: (images.js)
* gulp-imagemin
* imagemin-jpeg-recompress
* imagemin-pngquant

***

### Sass preprocessor (styles-libs.js, styles.js)

***


### Files versions (pages.js)
 * gulp-rev
 * gulp-rev-rewrite
 
***
 
 
### Static files (files.js, fonts.js)

***

### Watching changes (watch.js) 

***

### BrowserSync (server.js)
* **Site:** https://www.browsersync.io/

***


### HTML (pages.js)

***


### Clean (clean.js)

***


### Pathes to files (_paths.js)

***

## Testing

**Chai + Mocha**
* **Articles:**
https://learn.javascript.ru/testing, https://dev.to/bnorbertjs/my-nodejs-setup-mocha--chai-babel7-es6-43ei

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

If any links don't work, use anonymizer