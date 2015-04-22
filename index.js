var asimov = require('asimov');
var website = require('asimov-static');

module.exports = function plugin () {

  asimov.use(website);
};

module.exports.start = function bootstrap (next) {

  asimov
    .use(module.exports)
    .start(next);
};

module.parent || module.exports.start();
