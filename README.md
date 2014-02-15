# LiveReload

Refresh the browser when files changed.

## Install

``` bash
$ npm install hexo-livereload --save
```

## Usage

Install the browser extension: <http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions->

When you run `hexo server`, this plugin will be started automatically.

## Options

You can configure this plugin in `_config.yml`.

``` yml
livereload:
  port: 35729
```

- **port** - LiveReload port (Default: 35729)