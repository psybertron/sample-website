const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

// Compile Pug
function html() {
  return gulp.src('src/pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

// Compile Sass
function styles() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Minify JS
function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

// Copy images
function images() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.stream());
}

// Watch files
function watch() {
  gulp.watch('src/pug/**/*.pug', html);
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/images/**/*', images);
}

// Serve
function serve() {
  browserSync.init({
    server: {
      baseDir: ['.', 'dist'],
      routes: {
        '/css': 'dist/css',
        '/js': 'dist/js',
        '/images': 'dist/images'
      }
    }
  });
  watch();
}

// Build
const build = gulp.parallel(html, styles, scripts, images);

// Dev
const dev = gulp.series(build, serve);

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.serve = serve;
exports.build = build;
exports.dev = dev;
exports.default = dev;