'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = tsc.createProject('./src/ts/tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    cfg = require('./gulpfile.config');

gulp.task('ts-lint', function () {
  return gulp.src(cfg.tsIn)
    .pipe(tslint())
    .pipe(tslint.report('prose'));
});

gulp.task('ts-compile', function () {
  var sourceTs = [
    cfg.tsIn,
  ];

  var tsResult = gulp.src(sourceTs)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));

  tsResult.dts.pipe(gulp.dest(cfg.tsOut));

  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cfg.tsOut));
});

gulp.task('default', ['ts-lint', 'ts-compile']);
