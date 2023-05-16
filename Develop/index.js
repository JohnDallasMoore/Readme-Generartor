// TODO: Include packages needed for this application
const {questions} = require('./questions')
const inquirer = require('inquirer');
// const fs = require('fs');

function askQuestions(){
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
    })
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
