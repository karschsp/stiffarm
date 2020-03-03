var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');

gulp.task(
  'styles',
  function() {
    return gulp.src('docroot/assets/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(csso())
      .pipe(gulp.dest('docroot/assets/css/'));
  }
);
