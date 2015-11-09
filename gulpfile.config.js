'use strict';
var GulpConfig = function() {
  var pub = {};
  pub.build = './build';
  pub.src = './src';

  pub.tsIn = pub.src + '/**/*.ts';
  pub.tsOut = pub.build + '/js';

  return pub;
};

module.exports = GulpConfig();
