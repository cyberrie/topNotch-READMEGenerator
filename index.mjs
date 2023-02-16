import inquirer from "inquirer";
import fs from "fs/promises";

// create a command line app that accepts the user input
// create questions to generate professional readme.md

// store markdownInfo questions in a variable
// use async/ await for prompt
let { title, description, installation } = await inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    //validate to make sure there is a value there
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your repository title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "A brief description of what this project does and who it's for:",
    //validate to make sure there is a value there
  },
  // confirm if there is an installation process
  {
    // y/n
    type: "confirm",
    name: "confirmInstallation",
    message: "Is there an installation process?",
  },

  {
    type: "input",
    name: "installation",
    message: "Please indicate installation instructions:",
    //  if the person selects a installation process allow them to input steps
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    },
  },
]);

let readmeMD = `# ${title}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Directions for future development](#directions-for-future-development)
- [Tests](#tests)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Description
${description}

## Installation
${installation}

## Usage

## Link Demo

## Built with

## What I learned

## Directions for future development

## Tests

## License

## Authors

## Acknowledgements

`;

await fs.writeFile("READMEtest.md", readmeMD);
