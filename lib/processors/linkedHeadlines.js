var asimov = require('asimov');

function linkHeadlines (model) {

  var rendered = model.attributes.rendered;
  var matcher = /<h\d\sid="(.+)">(.+)<\/h\d>/gi;

  rendered = rendered.replace(matcher, function (match, id) {
    match = match.replace('>', 'class="headline__header"><span class="headline__symbol">#</span>');
    match = '<a class="headline" href="#' + id + '">' + match + '</a>';
    return match;
  });

  model.set({ 'rendered': rendered }, { 'silent': true });
}

module.exports = function initLinkedHeadlines (next) {

  asimov.on('post:render:page', linkHeadlines);
  next();
};
