/* global hexo */

'use strict';

var assign = require('object-assign');

hexo.config.livereload = assign({
  port: 35729
}, hexo.config.livereload);

require('./lib/server')(hexo);
