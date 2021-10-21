// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var renderLicenseBadge = (license) => {
    switch (license) {
      case 'MIT':
        return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      case 'APACHE 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
      case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      case 'BSD 3':
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
var renderLicenseSection = (license) => { 
    switch (license) {
      case 'MIT':
        return renderLicenseBadge(license), renderLicenseLink(license)
      case 'APACHE 2.0':
        return renderLicenseBadge(license), renderLicenseLink(license)
      case 'GPL 3.0':
        return renderLicenseBadge(license), renderLicenseLink(license)
      case 'BSD 3':
        return renderLicenseBadge(license), renderLicenseLink(license)
      case 'None':
        return ''

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseSection}

  ## Description

${data.description}

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
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email.data}. 
You can find more of my work at [${username.data}](https://github.com/${username.data}/).
`;
}

module.exports = generateMarkdown;




