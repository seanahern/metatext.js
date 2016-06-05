var assert = require('chai').assert,
    metatext = require('../src/metatext');

describe('Perfect', function() {
  it("File with YAML and content returns JSON & String", function() {
    var result = metatext("tests/goodfile.txt", function(data, content){
      return [typeof data, typeof content];
    });
    assert.equal("object", result[0]);
    assert.equal("string", result[1]);
  });
});

describe("Equals", function() {
  it('Data param equals object', function() {
    assert.equal("object", metatext("tests/goodfile.txt", function(data, content) {
      return typeof data;
    }));
  });
  it('Content param equals string', function() {
    assert.equal("string", metatext("tests/goodfile.txt", function(data, content) {
      return typeof content;
    }));
  });
});

describe('Errors', function() {
  it('Missing file path throws error', function() {
    assert.throws(function() {
      return metatext(null, function(data, content) {
          return data;
      });
    });
  });
  it('Missing callback path throws error', function() {
    assert.throws(function() {
      return metatext("tests/goodfile.txt");
    }, /No callback function provided/);
  });
  it('Missing YAML throws error', function() {
    assert.throws(function() {
      return metatext("tests/noyaml.txt");
    });
  });
  it('Missing content does not throw an error', function() {
    assert.doesNotThrow(function() {
      return metatext("tests/nocontent.txt", function(data, content) { });
    });
  });
});
