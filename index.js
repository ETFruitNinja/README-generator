const inquirer = require('inquirer');
const fs = require('fs');

// generates license badge based on selected license
function getLicenseBadge(license) {
    if (license === 'MIT') {
        return 'https://img.shields.io/badge/license-MIT-green'
    } else if (license === 'APACHE 2.0') {
        return 'https://img.shields.io/badge/license-APACHE%202.0-green'
    } else if (license === 'GPL 3.0') {
        return 'https://img.shields.io/badge/license-GPL%203.0-green';
    } else if (license === 'BSD 3') {
        return 'https://img.shields.io/badge/license-BSD$203-green'
    }
}

// function to determine text content of README file
const generateReadMe = ({title, description, installation, usage, contributing, tests, license, username, email}) => 
`# ${title}
![license badge](${getLicenseBadge(license)})

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

// inquirer: includes questions to ask to the user; use the responses to generate the README file
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

    fs.writeFile(`${data.title}-README.md`, readMeContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });