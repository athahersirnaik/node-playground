const snippets = require("./loadSnippets");

function runSnippet(name, args = {}) {
  if (!snippets[name]) {
    console.log(`Error: Snippet "${name}" not found.`);
    return;
  }

  try {
    console.log('=====> Running snippet:', name, '<=====');
    snippets[name](snippets, args);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// Update this function call manually to test different snippets
runSnippet("greetUser", { name: "Athaher", age: 30 });
// runSnippet("uuid");
// runSnippet("nestedSnippet");

module.exports = runSnippet;
