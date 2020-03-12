<<<<<<< HEAD
let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
	posthtml = require('gulp-posthtml'),
    precss = require('precss'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    del = require('del'),
	less = require('gulp-less'),
    stylelint = require('gulp-stylelint'),
    cssnano = require('cssnano'),
	htmlnano = require('htmlnano'),
	include = require('posthtml-include'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    newer = require('gulp-newer'),
    postcssPresetEnv = require('postcss-preset-env'),
    concat = require('gulp-concat'),
    sprites = require('postcss-sprites'),
    assets = require('postcss-assets'),
    pfm = require('postcss-font-magician'),
    postcssShort = require('postcss-short'),
    debug = require('gulp-debug'),
    easyimport = require('postcss-easy-import'),
    sugarss = require('sugarss'),
    atImport = require("postcss-import"),
	eslint = require('gulp-eslint');

function clean() {
    return del('build/');
}

function styles() {
    return gulp.src('src/less/main.less')
	    .pipe(debug({title: 'stylelint'}))
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ]
        }))
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: 'Styles',
                    message: error.message
                }
            })
        }))
        .pipe(less())
        .pipe(postcss([
            autoprefixer()]))
        .pipe(gulp.dest('src/css'))
		.pipe(postcss([assets({
        loadPaths: ['src/img/'],
        relativeTo: 'src/css'
         })]))
        .pipe(postcss([
            cssnano()]))
		.pipe(rename('all.min.css'))
		.pipe(debug({title: 'min'}))
		.pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/index.html')
        .pipe(debug({title: 'html'}))
		.pipe(posthtml([
            include()]))
        .pipe(gulp.dest('build/'))
		.pipe(browserSync.stream());
}

function js () {
	return gulp.src('src/js/*.js')
		.pipe(eslint())
		.pipe(eslint.format( ))
		.pipe(gulp.dest('build/'))
		.pipe(eslint.failAfterError())
		.pipe(browserSync.stream());
=======
const gulp = require( 'gulp' );
const browserSync = require( 'browser-sync' ).create();
const autoprefixer = require( 'autoprefixer' );
const sourcemaps = require( 'gulp-sourcemaps' );
const postcss = require( 'gulp-postcss' );
const posthtml = require( 'gulp-posthtml' );
const precss = require( 'precss' );
const rename = require( 'gulp-rename' );
const notify = require( 'gulp-notify' );
const plumber = require( 'gulp-plumber' );
const imagemin = require( 'gulp-imagemin' );
const webp = require( 'gulp-webp' );
const del = require( 'del' );
const less = require( 'gulp-less' );
const stylelint = require( 'gulp-stylelint' );
const cssnano = require( 'cssnano' );
const htmlnano = require( 'htmlnano' );
const include = require( 'posthtml-include' );
const svgSprite = require( 'gulp-svg-sprite' );
const svgmin = require( 'gulp-svgmin' );
const newer = require( 'gulp-newer' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const concat = require( 'gulp-concat' );
const sprites = require( 'postcss-sprites' );
const assets = require( 'postcss-assets' );
const pfm = require( 'postcss-font-magician' );
const postcssShort = require( 'postcss-short' );
const debug = require( 'gulp-debug' );
const easyimport = require( 'postcss-easy-import' );
const sugarss = require( 'sugarss' );
const atImport = require( 'postcss-import' );

function clean() {
  return del( 'dist/' );
}

function styles() {
  return gulp
    .src( 'src/less/main.less' )
    .pipe( debug( { title: 'stylelint' } ) )
    .pipe(
      stylelint( {
        reporters: [{ formatter: 'string', console: true }],
      } ),
    )
    .pipe( sourcemaps.init() )
    .pipe(
      plumber( {
        errorHandler: notify.onError( ( error ) => ( {
          title: 'Styles',
          message: error.message,
        } ) ),
      } ),
    )
    .pipe( less() )
    .pipe( postcss([autoprefixer()]) )
    .pipe( gulp.dest( 'src/css' ) )
    .pipe(
      postcss([
        assets( {
          loadPaths: ['src/img/'],
          relativeTo: 'src/css',
        } ),
      ]),
    )
    .pipe( postcss([cssnano()]) )
    .pipe( rename( 'all.min.css' ) )
    .pipe( debug( { title: 'min' } ) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( 'dist/css' ) )
    .pipe( browserSync.stream() );
}

function html() {
  return gulp
    .src( 'src/index.html' )
    .pipe( debug( { title: 'html' } ) )
    .pipe( posthtml([include()]) )
    .pipe( gulp.dest( 'dist/' ) )
    .pipe( browserSync.stream() );
>>>>>>> header
}

// function css() {
// return gulp.src('src/css/in.css')
// .pipe(debug({title: 'stylelint'}))
// .pipe(stylelint({
// reporters: [
// {formatter: 'string', console: true}
// ]
// }))
// .pipe(plumber({
// errorHandler: notify.onError(function (error) {
// return {
// title: 'Styles',
// message: error.message
// };
// })
// }))
// .pipe(sourcemaps.init())
// .pipe(postcss([assets({
// loadPaths: ['src/img/'],
// relativeTo: 'src/css'
// })]))
// .pipe(postcss([postcssPresetEnv({ stage: 0 })]))
// .pipe(postcss([postcssShort()]))
// .pipe(postcss([atImport()]))
// .pipe(postcss([autoprefixer()]))
// .pipe(postcss([cssnano]))
// .pipe(debug({title: 'min'}))
// .pipe(rename('all.min.css'))
// .pipe(debug({title: 'min css'}))
// .pipe(sourcemaps.write('.'))
// .pipe(gulp.dest('dist/css'))
// .pipe(browserSync.stream());
// }

function server() {
<<<<<<< HEAD
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });

    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
=======
  browserSync.init( {
    server: {
      baseDir: 'dist',
    },
  } );

  browserSync.watch( 'dist/**/*.*' ).on( 'change', browserSync.reload );
>>>>>>> header
}

function compress() {
  return gulp
    .src( 'src/img/**/*.{png,jpg}' )
    .pipe( debug( { title: 'compress' } ) )
    .pipe( newer( 'src/img' ) )
    .pipe(
      imagemin(
        imagemin.optipng( { optimizationLevel: 3 }, imagemin.jpegtran( { progressive: true } ) ),
      ),
    )
    .pipe( gulp.dest( 'src/img' ) );
}

function svg() {
  return gulp
    .src( 'src/img/**/*.svg' )
    .pipe( debug( { title: 'svgmin' } ) )
    .pipe(
      svgmin( {
        js2svg: {
<<<<<<< HEAD
        pretty: true
        }
        }))
    .pipe(gulp.dest('build/img'));
=======
          pretty: true,
        },
      } ),
    )
    .pipe( gulp.dest( 'src/img' ) );
>>>>>>> header
}

function conver() {
  return gulp
    .src( 'src/img/**/*.{png,jpg}' )
    .pipe( debug( { title: 'conver wepb' } ) )
    .pipe( webp( { quality: 80 } ) )
    .pipe( gulp.dest( 'src/img' ) );
}

function sprite() {
  return gulp
    .src( 'src/img/*.svg' )
    .pipe(
      svgSprite( {
        mode: {
          css: {
            dest: '.',
            bust: false,
            sprite: 'sprite.svg',
            layout: 'vertical',
            prefix: '.svg-',
            dimensions: true,
            render: {
              css: {
                dest: 'sprite.css',
              },
            },
          },
        },
      } ),
    )
    .pipe( gulp.dest( 'src/css' ) );
}

function watch() {
  gulp.watch( 'src/**/*.html', html );
  gulp.watch( 'src/**/*.less', gulp.series( 'styles' ) );
}

function copy() {
<<<<<<< HEAD
    return gulp.src('src/img/*.{webp}')
    .pipe(gulp.dest('build/img'));
}

function fonts() {
    return gulp.src('src/fonts/*.{woff2,woff}')
    .pipe(gulp.dest('build/fonts'));
}

gulp.task('build', gulp.series(clean, gulp.parallel(styles, html, fonts, svg, copy)));
gulp.task('default', gulp.series('build', gulp.parallel(watch, server)));
gulp.task(svg);
gulp.task(clean, gulp.parallel(html, css, svg));
gulp.task(html);
gulp.task(styles);
gulp.task(css);
gulp.task('images', gulp.series(compress, svg, conver));
gulp.task(conver);
gulp.task(sprite);
=======
  return gulp.src( 'src/img/*.{webp,svg}' ).pipe( gulp.dest( 'dist/img' ) );
}

function fonts() {
  return gulp.src( 'src/fonts/*.{woff2,woff}' ).pipe( gulp.dest( 'dist/fonts' ) );
}

gulp.task( 'build', gulp.series( clean, gulp.parallel( styles, html, fonts, copy ) ) );
gulp.task( 'default', gulp.series( 'build', gulp.parallel( watch, server ) ) );
gulp.task( svg );
gulp.task( clean, gulp.parallel( html, styles ) );
gulp.task( html );
gulp.task( styles );
// gulp.task( css );
gulp.task( 'images', gulp.series( compress, svg, conver ) );
gulp.task( conver );
gulp.task( sprite );
>>>>>>> header
