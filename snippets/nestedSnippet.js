module.exports = (snippets) => {
  console.log("Calling multiple snippets:");

  // Call other snippets
  snippets.helloWorld();
  snippets.mathOperation();
};
