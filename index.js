const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "what is the project name?",
        },
        {
            type: "input",
            name: "description",
            message: "describe your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Any installations?: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "input",
            name: "license",
            message: "What license was used for this project? ",
        },
        {
            type: "input",
            name: "contributing",
            message: "Were there any other contributors?"
        },
        {
            type: "input",
            name: "tests",
            message: "what tests were included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: " enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "what is your email: "
        }
    ]);
}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('.README.md', generateContent);
        console.log('Successfully made README.md');
    } catch (err) {
        console.log(err);
    }
}

init();  