var tinylr = require('tiny-lr'),
    port = 35729,
    server = tinylr();

hexo.on('server', function(){
  server.listen(port, function(err){
    if (err) return hexo.log.e(err);

    hexo.log.i('Livereload is listening on port %d', port);
  });

  hexo.on("processAfter", function(path) {
    server.changed({
      body: {
        files: [path]
      }
    });
  });

});

hexo.on('exit', function(){
  server.close();
});
