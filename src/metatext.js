"use strict"
var fs = require("fs"),
    yaml = require("js-yaml");

module.exports = (function() {

  // read in file for parsage
  var read = function(to_parse) {
    return fs.readFileSync(to_parse, 'utf8');
  };

  // yaml -> json
  var metadata = function(raw) {
    return yaml.load(raw);
  };

  /*
  * main function used to inspect and parse source file
  * containing yaml metadata (similar to front matter)
  *
  * @param to_parse - path to file, or string
  * @param callback - callback for handling results of parse
  */

  return function(to_parse, callback) {

    var raw = read(to_parse) || to_parse,
        matches = /^---([\s\S]+)---([\s\S]+)/m.exec(raw);

    if (!matches) {
      throw "parse error";
    }

    var data = metadata(matches[1]),
        content = matches[2];

    return callback(data, content);
  };

})();
