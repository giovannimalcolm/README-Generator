// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'APACHE 2.0':
      return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case 'BSD 3':
      return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
    case 'None':
      return ''
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
var renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'APACHE 2.0':
      return 'https://opensource.org/licenses/Apache-2.0'
    case 'GPL 3.0':
      return 'https://opensource.org/licenses/gpl-3.0.html'
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause'
    case 'None':
      return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `${renderLicenseBadge(license)}
       ${renderLicenseLink(license)}`
    case 'APACHE 2.0':
      return `${renderLicenseBadge(license)}  
      ${renderLicenseLink(license)}`
    case 'GPL 3.0':
      return `${renderLicenseBadge(license)} 
      ${renderLicenseLink(license)}`
    case 'BSD 3':
      return `${renderLicenseBadge(license)} 
      ${renderLicenseLink(license)}`
    case 'None':
      return ''

  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `# ${answers.title}
  ${renderLicenseSection(answers.license[0])}

  ## Description

${answers.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 

\`\`\`
${answers.installation}
\`\`\`

## Usage

${answers.usage}

## License 

This project is licensed under the ${answers.license} license.

## Contributing 

${answers.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${answers.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. 
You can find more of my work at ![${answers.username}](https://github.com/${answers.username}/).
`;
}

module.exports = generateMarkdown;