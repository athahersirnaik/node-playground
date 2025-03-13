const fs = require("fs");
const path = require("path");

const snippets = {};

// Dynamically load all snippets
fs.readdirSync(path.join(__dirname, "../snippets")).forEach((file) => {
  const snippetName = path.basename(file, ".js");
  snippets[snippetName] = require(`../snippets/${file}`);
});

module.exports = snippets;
