# metatext.js [![npm version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/metatext.js)

Node port of [this lightweight Jekyll-inspired metadata parser](https://github.com/jguest/metatext) written in Ruby.

metatext.js parses files that contain YAML data at the start of the file. It returns a POJO version of the data, and a raw string containing the content from the file.

## Getting started

`npm install metatext.js`

````js
var metatext = require("metatext");
````

## Usage

Given the example files in this repo, let's look at how you would use metatext.js.

`cat example/content.md`

````yaml
---
foo: hello
bar: world
---
this is some plain ol' text
````
Oh cool, this file has some text content, but also has some YAML data at the top of the file. Let's make that data useful.

`cat example/index.js`

```js
var metatext = require("metatext");

metatext("example/content.md", function(data, content) {
  console.log("The parsed YAML data is:\n", data);
  console.log("The content from the file is:\n", content);
});
```

Require metatext, and pass a string of the file location and a callback function. The callback should accept two parameters — the first being the data parsed from the YAML, and the second is a string parsed from the content after the YAML data.

`node example/index.js`

```
The parsed YAML data is:
 { foo: 'hello', bar: 'world' }
The content from the file is:
this is some plain ol' text
```

That's it!

Example contents inspired by [the original](https://github.com/jguest/metatext/blob/master/README.md).
