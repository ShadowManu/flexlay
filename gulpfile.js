const del = require('del');

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('clean', () => del('./dist'));

gulp.task('css', () => {
  let css = gulp.src('./src/flexlay.scss')
    .pipe(sass({}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));

  return css.pipe(cleanCSS())
    .pipe(rename('flexlay.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series(['clean', 'css']));

gulp.task('log', () => {
  console.log('works');
});
