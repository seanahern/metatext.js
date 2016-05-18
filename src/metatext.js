"use strict"
var fs = require("fs"),
    matter = require("gray-matter");

module.exports = (function() {

  var read = function(to_parse) {
    return fs.readFileSync(to_parse, 'utf8');
  };

  return function(to_parse, params) {

    var raw = read(to_parse) || to_parse;
    var matches = /^---([\s\S]+)---([\s\S]+)/m.exec(raw);

    if (!matches) {
      throw "parse error";
    }

    return { metadata: matches[1], content: matches[2] };
  };

})();
