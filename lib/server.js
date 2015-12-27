'use strict';

var tinylr = require('tiny-lr');

module.exports = function(hexo) {
  var server = tinylr();
  var port = hexo.config.livereload.port;
  var serverUrl = 'http://localhost:' + port;
  var queue = [];
  var timer;

  hexo.locals.set('livereload_js', function() {
    return serverUrl + '/livereload.js';
  });

  hexo.on('server', function() {
    server.listen(port, function(err) {
      if (err) return hexo.log.error(err);

      hexo.log.info('Livereload is listening on port %d', port);
    });

    hexo.route.on('update', function(path, data) {
      if (!data.modified) return;
      if (timer) clearTimeout(timer);

      queue.push(path);
      timer = setTimeout(timerFn, 100);
    });

    hexo.once('exit', function() {
      server.close();
    });
  });
};
