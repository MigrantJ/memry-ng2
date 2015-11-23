'use strict';
var GulpConfig = function() {
  var buildDir = './build',
      srcDir = './src',
      npmDir = './node_modules',
      bsDir = npmDir + '/bootstrap-sass';

  return {
    libsIn: [
      npmDir + '/systemjs/dist/system.src.js',
      npmDir + '/angular2/angular2.js'
    ],
    libsOut: buildDir + '/js',
    tsIn: srcDir + '/ts/**/*.ts',
    tsOut: buildDir + '/js',
    htmlIn: srcDir + '/html/**/*.html',
    htmlOut: buildDir,
    cssIn: srcDir + '/sass/app.scss',
    cssOut: buildDir + '/css',
    bootstrapSass: bsDir + '/assets/stylesheets',
    fontsIn: bsDir + '/assets/fonts/**/*',
    fontsOut: buildDir + '/fonts'
  };
};

module.exports = GulpConfig();
