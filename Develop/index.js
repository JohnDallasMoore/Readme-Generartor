// TODO: Include packages needed for this application
const {questions} = require('./questions')
// const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');


function generateMarkdown(answers) {
    return `
# ${answers.title}

## Description
### ${answers.description}

## Installation
### ${answers.installation}

## Usage
### ${answers.usage}

## License
### ${answers.license}

## Credits
### ${answers.credits}

## Contact
### For any questions, please feel free to send me an email at ${answers.email}.
### Check out my [GitHub](https://github.com/${answers.github}/)
`;
  }

function askQuestions(){
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        fs.appendFile('README.md', generateMarkdown(answers), 'utf-8', function(err){
            console.error(err);
        })
    });
}

function main(){
    // console.log(questions);
    askQuestions();
}

main();








// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
