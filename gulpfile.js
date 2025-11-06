'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  // return gulp.src('./sass/**/*.scss')
  return gulp.src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', buildStyles);
};