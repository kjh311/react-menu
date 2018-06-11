var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/App.css'));
});
 
gulp.task('sass', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});