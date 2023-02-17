import inquirer from "inquirer";
import fs from "fs/promises";

// create a command line app that accepts the user input
// create questions to generate professional readme.md

// store markdownInfo questions in a variable
// use async/ await for prompt
let {
  title,
  description,
  installation,
  demo,
  builtWith,
  learnings,
  roadmap,
  authors,
  github,
  githubURL,
  email,
  contact,
} = await inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    //validate to make sure there is a value there
    validate: (titleInput) => {
      if (titleInput) {
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
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of the repository.");
        return false;
      }
    },
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
      } else {
        return false;
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
  {
    type: "input",
    name: "learnings",
    message:
      "What are the three most important things you learned while working on this project?",
  },
  {
    type: "confirm",
    name: "checkRoadmap",
    message: "Any directions for future development?",
  },
  {
    type: "input",
    name: "roadmap",
    message: "Please indicate directions for future development:",
    when: ({ checkRoadmap }) => {
      if (checkRoadmap) {
        return true;
      } else {
        console.log(
          "Currently, there are no directions for future development"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "authors",
    message: "Please list the project authors",
    validate: (authorsInput) => {
      if (authorsInput) {
        return true;
      } else {
        console.log("Please list the authors.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubURL",
    message: "Please enter your github URL:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub URL.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contact",
    message:
      "Please indicate how can users reach you with any additional questions:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("This is required");
        return false;
      }
    },
  },
]);

// format installation output
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
- [Roadmap](#roadmap)
- [License](#license)
- [Authors](#authors)
- [GitHub](#github)
- [Email](#email)
- [Acknowledgements](#acknowledgements)

## Description
- ${description}

## Installation

- Copy repository SSH key and clone the existing repository with the following command:

${
  installation
    ? formatInstallation(installation)
    : // if no installation, default output
      "No installation process provided."
}

## Demo

![${title}](${demo})

## Built with

- ${builtWith}

## What I learned

- ${learnings}

## Roadmap

- ${
  roadmap
    ? roadmap
    : // in case the answer is No, default output
      "Currently, there are no directions for future development."
}

## License

## Authors

- ${authors}

## GitHub 

- [${github}](${githubURL})

## Email

${email}

- ${contact}

## Acknowledgements

`;

await fs.writeFile("READMEtest.md", readmeMD);
