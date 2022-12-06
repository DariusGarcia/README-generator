// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = []

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt([
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
		])
		.then((data) => {
			const filename = 'README.md'

			fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
				err ? console.log(err) : console.log('Success!')
			)
		})
}

// Function call to initialize app
init()
