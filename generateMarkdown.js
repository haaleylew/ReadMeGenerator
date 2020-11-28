function generateReadme(answers) {
  return `
${answers.projectTitle}

 ${answers.description}

## Installation
 ${answers.installation}

## Usage
 ${answers.usage}

## License

 ${answers.license} 

## Contributing
 ${answers.contributing}

## Tests
 ${answers.tests}

## Questions
 ${answers.questions}

Find me on GitHub: [${answers.username}](https://github.com/${answers.username}


 Email me with any questions: ${answers.email}

`;
}

module.exports = generateReadme;