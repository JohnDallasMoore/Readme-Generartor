module.exports = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide installation instructions(if providing code snippet, enclose in backticks):",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain how your project is meant to be used:",
        name: "usage"
    },
    {
        type: 'list',
        message: "What type of license did you use?",
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache']
    },
    {
        type: "input",
        message: "Please give credit as needed:",
        name: "credits"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }
]