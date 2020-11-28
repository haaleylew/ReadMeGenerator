const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")
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

async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync('.README.md', generateContent);
        console.log('Successfully made README.md');
    } catch (err) {
        console.log(err);
    }
}

init();