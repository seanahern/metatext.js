"use strict"
var fs = require("fs"),
    matter = require("gray-matter");

module.exports = (function() {

  var read = function(to_parse) {
    return fs.readFileSync(to_parse, 'utf8');
  };

  return function(to_parse, params) {
    var raw = read(to_parse) || to_parse;
    var parsed = matter(raw);
    return { metadata: parsed.data, content: parsed.content };
  };

})();
