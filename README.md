# hexo-livereload

[![Build Status](https://travis-ci.org/hexojs/hexo-livereload.svg?branch=master)](https://travis-ci.org/hexojs/hexo-livereload)  [![NPM version](https://badge.fury.io/js/hexo-livereload.svg)](http://badge.fury.io/js/hexo-livereload) [![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-livereload.svg)](https://coveralls.io/r/hexojs/hexo-livereload?branch=master)

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

``` yaml
livereload:
  port: 35729
```

- **port** - LiveReload port (Default: 35729)

[npm-badge]: https://badge.fury.io/js/hexo-broken-link-checker.svg
[npm-url]: https://badge.fury.io/js/hexo-broken-link-checker
