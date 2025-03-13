# Node Playground

A versatile Node.js project designed to manage and execute code snippets efficiently. Each snippet resides in its own module, promoting modularity and ease of testing.

## Features

- **Modular Snippet Management**: Organize code snippets into individual modules for clarity and reusability.
- **Dynamic Execution**: Run any snippet by specifying its name and passing the required arguments.
- **Inter-Snippet Communication**: Allow snippets to invoke other snippets seamlessly.
- **Automated Testing**: Utilize Jest for testing snippets to ensure reliability.

## Project Structure

The project is organized as follows:

```
node-playground/
├── snippets/             # Individual snippet modules
│   ├── helloWorld.js
│   ├── mathOperation.js
│   ├── greetUser.js
│   └── nestedSnippet.js
├── src/
│   ├── loadSnippets.js   # Dynamically loads all snippets
│   ├── runSnippet.js     # Executes specified snippets
├── tests/
│   └── snippet.test.js   # Jest test cases for snippets
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/athahersirnaik/node-playground.git
   cd node-playground
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

## Usage

### Running a Snippet

To execute a specific snippet:

1. \*\*Modify \*\*\`\`:

   In `src/runSnippet.js`, update the function call to the desired snippet. For example, to run `greetUser`:

   ```javascript
   runSnippet("greetUser", { name: "Athaher", age: 30 });
   ```

2. **Execute the Script**:

   ```bash
   node src/runSnippet.js
   ```

   **Output**:

   ```
   Hello, Athaher!
   You are 33 years old.
   Hello, World!
   ```

### Adding a New Snippet

1. **Create the Snippet File**:

   In the `snippets` directory, create a new file named `yourSnippetName.js`.

2. **Define the Snippet Function**:

   Implement your function, ensuring it accepts the `snippets` object and any necessary arguments:

   ```javascript
   module.exports = (snippets, args) => {
     // Your code here
   };
   ```

3. **Execute the Snippet**:

   Follow the [Running a Snippet](#running-a-snippet) steps to test your new snippet.

## Testing

The project uses [Jest](https://jestjs.io/) for testing.

1. **Run Tests**:

   ```bash
   npm test
   ```

2. **Example Test Output**:

   ```
   PASS  tests/snippet.test.js
     ✓ Should execute a snippet that calls another snippet (5 ms)
     ✓ Should execute a nested snippet (3 ms)
   ```

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**:

   Click the "Fork" button at the top right of this page.

2. **Create a New Branch**:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Commit Your Changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch**:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a Pull Request**:

   Navigate to the original repository and click "New Pull Request".

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modular coding practices and efficient snippet management.
- Utilizes [Jest](https://jestjs.io/) for testing.

