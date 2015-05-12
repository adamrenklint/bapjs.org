var Helper = require('asimov-static').Helper;

module.exports = Helper.extend({

  'run': function (direction, url, hash, block) {

    var page = this.pages.get(url);

    var urlParts = url.split('/');
    var parentUrl = urlParts.slice(0, urlParts.length - 1).join('/');

    var parentPage = this.pages.get(parentUrl);
    var siblings = parentPage.children();

    var index = siblings.indexOf(page);
    var siblingIndex = direction === 'next' ? index + 1 : index - 1;
    var sibling = siblings.models[siblingIndex];

    if (sibling) {
      return block(sibling.attributes);
    }
    else {
      return '';
    }
  }
});
