var Helper = require('asimov-static').Helper;
// var _super = Helper.prototype;
// var _ = require('lodash');

function strip (source) {
  console.log(source);
  return source.replace(/<p>/g, '').replace(/<\/p>/g, '');
}

module.exports = Helper.extend({

  'run': function (source, params, block) {

    return this.html('script', {
      html: strip(source.string)
    });
    // var self = this;
    //
    // if (typeof adress !== 'string') {
    //   block = params;
    //   params = adress;
    //   adress = params.adress || params.href || params.src || params.email;
    // }
    //
    // params.href = 'mailto:' + adress;
    //
    // if (params.subject) {
    //   params.href += '?subject=' + encodeURIComponent(params.subject);
    // }
    //
    // if (_.isFunction(block)) {
    //   params.html = block(params);
    // }
    // else {
    //   params.text = params.text || params.title || adress;
    // }
    //
    // params.title = params.title || params.text || adress || _.escape(params.html);
    //
    // delete params.adress;
    // delete params.subject;
    //
    // return self.html('a', params);
  }
});
