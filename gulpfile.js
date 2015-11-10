'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = tsc.createProject('./src/ts/tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    gls = require('gulp-live-server'),
    concat = require('gulp-concat'),
    cfg = require('./gulpfile.config');

gulp.task('libs-build', function () {
  return gulp.src(cfg.libsIn)
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(cfg.libsOut));
});

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

gulp.task('ts-build', ['ts-lint', 'ts-compile']);

gulp.task('html-build', function() {
  return gulp.src([cfg.htmlIn])
    .pipe(gulp.dest(cfg.htmlOut));
});

gulp.task('watch', function() {
  gulp.watch([cfg.tsIn], ['ts-build']);
  gulp.watch([cfg.htmlIn], ['html-build']);
});

gulp.task('serve', ['watch'], function() {
  var server = gls.static('build', 8080);
  server.start();

  gulp.watch(['build/**/*.js', 'build/**/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['serve']);
