#!/usr/bin/env node
console.log('coucou from bin index')
var each = require('async-each-series')

each(['foo','bar','baz'], function(el, next) {
  setTimeout(function () {
    console.log(el);
    next();
  }, Math.random() * 5000);
}, function (err) {
  console.log('finished');
});