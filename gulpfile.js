var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');

gulp.task('less', function() {
  return gulp.src('stylesheets/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/*.less', ['less']);
});

gulp.task('build', ['less']);
gulp.task('default', ['build', 'watch']);
