module.exports = (snippets, user) => {
  console.log(`Hello, ${user.name}!`);
  console.log(`You are ${user.age} years old.`);

  // Calling another snippet inside
  snippets.helloWorld();
};
