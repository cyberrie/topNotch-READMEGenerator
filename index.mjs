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
  roadmap,
  authors,
  github,
  githubURL,
  email,
  contact,
  license,
  contributing,
  usage,
  tests,
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
    type: "input",
    name: "usage",
    message: "Please indicate any directions for the application use:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please specify app usage.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "To run tests, run the following command:",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please indicate how to run tests.");
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
      "Please list the technologies, frameworks, libraries and any other tools that were used to develop the project:",
    validate: (builtInput) => {
      if (builtInput) {
        return true;
      } else {
        console.log("Please specify what was this app built with.");
        return false;
      }
    },
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
    name: "contributing",
    message: "Please indicate directions for contributions:",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Please indicate directions for contributions.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license",
    choices: [
      "MIT License",
      "Mozzilla Public License 2.0",
      "Open Database License (ODbl)",
      "The Unilicense",
      "Boost Software License 1.0",
      "Apache 2.0 License",
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select a license.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "authors",
    message: "Please list the project authors:",
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
    validate: function (value) {
      //This function validates that the users input is an email address.
      const pass = value.match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // email address regular expression
      );
      if (pass) {
        return true;
      }
      return "Please enter a valid email address"; //This message is printed if a valid email is not provided.
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

////////////// Functions  //////////////////
// format installation output
function formatCode(value) {
  return "```\n" + value + "\n```";
}

// Generate license badge function
function generateBadge(license) {
  let badgeUrl;

  switch (license) {
    case "MIT License":
      badgeUrl = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Mozzilla Public License 2.0":
      badgeUrl = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "Open Database License (ODbl)":
      badgeUrl = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
      break;
    case "The Unilicense":
      badgeUrl = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case "Boost Software License 1.0":
      badgeUrl = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "Apache 2.0 License":
      badgeUrl = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    default:
      badgeUrl = `[![License](https://img.shields.io/badge/License-Unknown-lightgrey.svg)](https://opensource.org/License-Unknown-lightgrey)`;
  }
  return badgeUrl;
}

// function to render user input as a list
function renderInputAsList(input) {
  // user input comma separated
  const items = input.split(",");

  const listItems = items
    .map((item) => {
      // create list item for each input item using Markdown syntax
      return `* ${item.trim()}`;
    })
    // join all list items together into a string, separated by newlines
    .join("\n");

  return listItems;
}
// readme.md
let readmeMd = `# ${title}

${generateBadge(license)}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Demo](#demo)
- [Built with](#built-with)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
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
    ? formatCode(installation)
    : // if no installation, default output
      "No installation process provided."
}

## Usage

- ${usage}

## Tests

- ${title} includes a suite of automated tests to ensure that the application works as expected. To run the tests, use the following command:

${formatCode(tests)}

## Demo

![${title}](${demo})

## Built with

${renderInputAsList(builtWith)}

## Roadmap

- ${
  roadmap
    ? roadmap
    : // in case the answer is No, default output
      "Currently, there are no directions for future development."
}

## Contributing

${contributing}

## License

- ${title} is released under:  

${generateBadge(license)}

## Authors

${renderInputAsList(authors)} 

## GitHub 

- [${github}](${githubURL})

## Email

- ${contact}

${email}

## Acknowledgements

`;

await fs.writeFile("yourREADME.md", readmeMd);

// Message to the user when it ends
console.log("Thank you for your input, your README.md is now generated.");
