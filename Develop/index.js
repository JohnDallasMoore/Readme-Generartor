// TODO: Include packages needed for this application
const questions = require('./questions')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

function askQuestions(){
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        fs.writeFile('README.md', generateMarkdown(answers), 'utf-8', function(err){
            console.error(err);
        })
    });
}

(() =>{
    askQuestions();
})()