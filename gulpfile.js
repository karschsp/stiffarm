var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var order = require('gulp-order');

gulp.task(
  'styles',
  function() {
    return gulp.src('docroot/assets/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(csso())
      .pipe(gulp.dest('docroot/assets/css/'));
  }
);

gulp.task(
  'scripts',
  function() {
    return gulp.src('docroot/assets/js/**/*.js')
      .pipe(order([
        'docroot/assets/js/jquery.min.js',
        'docroot/assets/js/jquery.scrollex.min.js',
        'docroot/assets/js/jquery.scrolly.min.js',
        'docroot/assets/js/browser.min.js',
        'docroot/assets/js/breakpoints.min',
        'docroot/assets/js/util.js',
        'docroot/assets/js/main.js'
      ]))
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('docroot/js'))
      .pipe(rename('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('docroot/js'));
  }
);
