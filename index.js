// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = 'README.md';



// TODO: Create an array of questions for user input

const promptUser = () => {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
    ])
    .then((answers) => {
        console.log(answers.license)
        writeToFile('README.md', generateMarkdown(answers))
      })
      .catch((err) => {
        err ? console.error(err) : console.info(`Something went wrong`)

        })
  };





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created a README!')
    );
}




// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
