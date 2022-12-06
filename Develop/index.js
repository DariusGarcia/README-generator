// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const markdownStructure = (data) =>
	`
# ${data.title}

## Description

${data.description}

## Usage

${data.usage}

## Installation

${data.installation}

`

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'Enter a title:',
		name: 'title',
	},
	{
		type: 'checkbox',
		message: 'Choose a license:',
		name: 'license',
		choices: ['MIT', 'GNU', 'Apache', 'Mozilla', 'ISC'],
	},
	{
		type: 'input',
		message: 'Enter a description:',
		name: 'description',
	},
	{
		type: 'input',
		message: 'Enter the usage of this project:',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Enter the installation method:',
		name: 'installation',
	},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((data) => {
		const filename = 'README.md'
		const finishedMarkup = markdownStructure(data)
		fs.writeFile(filename, finishedMarkup, (err) =>
			err ? console.log(err) : console.log('Success!')
		)
	})
}

// Function call to initialize app
init()

// JSON.stringify(data, null, '\t')
