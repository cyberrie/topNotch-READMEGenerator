import inquirer from "inquirer";
import fs from "fs/promises";

// create a command line app that accepts the user input
// create questions to generate professional readme.md

// store markdownInfo questions in a variable
// use async/ await for prompt
let { title, description, installation, demo, builtWith } =
  await inquirer.prompt([
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
      message:
        "A brief description of what this project does and who it's for:",
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
      message:
        "Copy repository SSH key and clone the existing repository with the following command:",
      //  if the person selects a installation process allow them to input steps
      when: ({ confirmInstallation }) => {
        if (confirmInstallation) {
          return true;
        }
      },
    },
    {
      type: "confirm",
      name: "checkDemo",
      message:
        "Would you like to provide a demo/ screenshot of your application? It is recommended to add this for usage purposes.",
    },
    {
      type: "input",
      name: "demo",
      message: "Please indicate a pathway to your demo:",
      when: ({ checkDemo }) => {
        if (checkDemo) {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "builtWith",
      message:
        "Please list the technologies, frameworks, libraries and any other tools that were used to develop the project?",
    },
  ]);

// format installation
function formatInstallation(installation) {
  return "```\n" + installation + "\n```";
}

let readmeMD = `# ${title}

## Table of contents

- [Description](#description)
- [Installation](#installation)
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

- Copy repository SSH key and clone the existing repository with the following command:

${
  installation
    ? formatInstallation(installation)
    : "No installation process provided."
}

## Demo
![${title}](${demo})

## Built with
${builtWith}

## What I learned

## Directions for future development

## Tests

## License

## Authors

## Acknowledgements

`;

await fs.writeFile("READMEtest.md", readmeMD);
