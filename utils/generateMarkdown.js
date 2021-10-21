// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license){
    return '';
  }
  else{



    switch (operation) {
      case 'sum':
        console.log(maths.sum(numOne, numTwo));
        break;
      case 'difference':
        console.log(maths.difference(numOne, numTwo));
        break;
      case 'product':
        console.log(maths.product(numOne, numTwo));
        break;
      case 'quotient':
        console.log(maths.quotient(numOne, numTwo));
        break;
      default:
        console.log('Check your maths!');
    }
    


  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  //![Github License](licenseurl)

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




