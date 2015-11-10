'use strict';
var GulpConfig = function() {
  var pub = {};
  pub.build = './build';
  pub.src = './src';
  pub.npm = './node_modules';

  pub.libsIn = [
    pub.npm + '/systemjs/dist/system.src.js',
    pub.npm + '/angular2/angular2.js'
  ]
  pub.libsOut = pub.build + '/js';

  pub.tsIn = pub.src + '/ts/**/*.ts';
  pub.tsOut = pub.build + '/js';

  return pub;
};

module.exports = GulpConfig();
