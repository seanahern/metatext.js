var metatext = require("../src/metatext");

metatext("./example/content.md", function(data, content) {
  console.log(data);
  console.log(content);
});

