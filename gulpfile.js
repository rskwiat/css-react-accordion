var gulp = require('gulp'),
  connect = require('gulp-connect'),
  rename = require('gulp-rename'),
  react = require('gulp-react');

gulp.task('jsx', function () {
  return gulp.src('./app/js/accordion.jsx')
    .pipe(react())
    .pipe(rename("accordion.js"))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    root: 'app'
  });
});

gulp.task('watch', function(){
  gulp.watch('js/**/*.jsx', ['jsx']);
});

gulp.task('default', ['connect', 'watch']);
