const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

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
	{
		type: 'input',
		message: 'Enter any collaborators if there were any:',
		name: 'contributing',
	},
	{
		type: 'input',
		message: 'Enter any tests:',
		name: 'tests',
	},
	{
		type: 'input',
		message: 'Enter GitHub username:',
		name: 'github',
	},
	{
		type: 'input',
		message: 'Enter email:',
		name: 'email',
	},
]

function writeToFile(data) {
	const filename = 'README.md'
	fs.writeFile(filename, data, (err) =>
		err ? console.log(err) : console.log('Success!')
	)
}

function init() {
	inquirer.prompt(questions).then((data) => {
		const completedMarkdownContent = generateMarkdown(data)
		writeToFile(completedMarkdownContent)
	})
}

init()
