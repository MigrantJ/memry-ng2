'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = tsc.createProject('./src/ts/tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    gls = require('gulp-live-server'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cfg = require('./gulpfile.config');

gulp.task('build-libs', function () {
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

gulp.task('build-ts', ['ts-lint', 'ts-compile']);

gulp.task('build-html', function() {
  return gulp.src([cfg.htmlIn])
    .pipe(gulp.dest(cfg.htmlOut));
});

gulp.task('build-css', function () {
  return gulp.src(cfg.cssIn)
    .pipe(sass({
      includePaths: [cfg.bootstrapSass],
      errLogToConsole: true
    }))
    .pipe(gulp.dest(cfg.cssOut));
});

gulp.task('build-fonts', function() {
  return gulp.src(cfg.fontsIn)
    .pipe(gulp.dest(cfg.fontsOut));
});

gulp.task('build', ['build-html','build-ts','build-css','build-fonts']);

gulp.task('watch', function() {
  gulp.watch([cfg.tsIn], ['build-ts']);
  gulp.watch([cfg.htmlIn], ['build-html']);
});

gulp.task('serve', ['watch'], function() {
  var server = gls.static('build', 8080);
  server.start();

  gulp.watch(['build/**/*.js', 'build/**/*.html'], function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['serve']);
