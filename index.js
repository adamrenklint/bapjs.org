var asimov = require('asimov');
var website = require('asimov-static');
var linkedHeadlines = require('./lib/processors/linkedHeadlines');

module.exports = function plugin () {

  asimov
    .use(website)
    .preinit(linkedHeadlines);
};

module.exports.start = function bootstrap (next) {

  asimov
    .use(module.exports)
    .start(next);
};

module.parent || module.exports.start();
