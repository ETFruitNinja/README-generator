const inquirer = require('inquirer');
const fs = require('fs');

// function to determine text content of README file
const generateReadMe = ({title, description, installation, usage, contributing, tests, license, username, email}) => 
`# ${title}
![license badge](https://img.shields.io/github/license/etfruitninja/README-generator)

## Description

${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

Licensed under the ${license} license.

## Contributing

${contributing}

## Tests

${tests}

## Questions

GitHub Profile: github.com/${username}\n
Email: ${email}`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project\'s functionality',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide instructions for installation',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions regarding your project\'s usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide test instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
  ])
  .then((data) => {
    const readMeContent = generateReadMe(data);

    fs.writeFile('sample-README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });