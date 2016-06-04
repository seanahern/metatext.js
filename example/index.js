var metatext = require("../src/metatext");

metatext("example/content.md", function(data, content) {
  console.log("The parsed YAML data is:\n", data);
  console.log("The content from the file is:\n", content);
});
