const runSnippet = require("../src/runSnippet");

test("Should execute a snippet that calls another snippet", () => {
  console.log = jest.fn();
  runSnippet("greetUser", {name: "Alice"});

  expect(console.log).toHaveBeenCalledWith("Hello, Alice!");
  expect(console.log).toHaveBeenCalledWith("Hello, World!");
});

test("Should execute a nested snippet", () => {
  console.log = jest.fn();
  runSnippet("nestedSnippet");

  expect(console.log).toHaveBeenCalledWith("Calling multiple snippets:");
  expect(console.log).toHaveBeenCalledWith("Hello, World!");
  expect(console.log).toHaveBeenCalledWith(4);
});
