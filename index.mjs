import inquirer from "inquirer";
import fs from "fs/promises";

// create a command line app that accepts the user input
// create questions to generate professional readme.md

// store markdownInfo questions in a variable
// use async/ await for prompt
let { title } = await inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    name: "title",
    message: "What is the title of your repository? (Required)",
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
]);

let readmeMD = `# ${title}

## Table of contents

- [Overview](#overview)
- [Installation](#instalation)
- [Usage](#usage)
- [Link Demo](#link-demo)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Directions for future development](#directions-for-future-development)
- [Tests](#tests)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Overview

## Installation

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
