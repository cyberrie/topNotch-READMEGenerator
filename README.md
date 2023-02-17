# Professional README Generator

## Table of contents

- [Overview](#overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Application Demo](#application-demo)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-I-learned)
- [Directions for future development](#directions-for-future-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

This is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

## Acceptance Criteria

- When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:

  - The title of my project

  - Sections entitled:

    - Description
    - Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    - Questions

  - When a user enters the project title then it is displayed as the title of the README

  - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

  - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under

  - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile

  - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

  - When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Usage

The application can be invoked by using the following command:

```bash
node index.js
```

## Application Demo

The following animation demonstrates the application functionality:

![README Generator]()

## Built with...

- JavaScript

- Node.js

- Inquirer

## What I learned

## Directions for future development

Things for the future may include:

- Dynamic Rendering on Table of Contents, based on user's chosen options

- Removing README section in case user selects 'N' to confirm input

## Useful Resources

- [npm inquirer](https://www.npmjs.com/package/inquirer)

- [GitHub Docs Basic Writing and Formatting Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

- [Markdown License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Author

©️ Helena Gilja 2023. All Rights Reserved.

- GitHub - [cyberrie](https://github.com/cyberrie)

## Acknowledgements 🌟
