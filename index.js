var tinylr = require('tiny-lr'),
  port = 35729,
  server = tinylr(),
  serverUrl = 'http://localhost:' + port,
  queue = [],
  timer;

var timerFn = function(){
  if (queue.length){
    server.changed({
      body: {
        files: queue
      }
    });
  }
};

hexo.locals({
  livereload_js: function(){
    return serverUrl + '/livereload.js';
  }
});

hexo.on('server', function(){
  server.listen(port, function(err){
    if (err) return hexo.log.e(err);

    hexo.log.i('Livereload is listening on port %d', port);
  });

  hexo.route.on('update', function(path, data){
    if (!data.modified) return;
    if (timer) clearTimeout(timer);

    queue.push(path);
    timer = setTimeout(timerFn, 100);
  });
});

hexo.on('exit', function(){
  server.close();
});