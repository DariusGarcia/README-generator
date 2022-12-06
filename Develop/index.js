// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const fetchLicense = (license) => {
	switch (license) {
		case 'MIT':
			return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
		case 'GNU':
			return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
		case 'Apache':
			return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
		case 'ISC':
			return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
		case 'Mozilla':
			return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
		default:
			'No license provided.'
	}
}

const generateMarkdown = (data) =>
	`# ${data.title}

## License 

${fetchLicense(data.license.toString())}

## Table of contents
1. [Description](#description)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Installation](#installation)
5. [Tests](#tests)
6. [Questions](#questions)

## Description <a name="description"></a>

${data.description}

## Usage <a name="usage"></a>

${data.usage}

## Contributing <a name="contributing"></a>

${data.contributing}

## Installation <a name="installation"></a>

${data.installation}

## Tests <a name="tests"></a>

${data.test}

## Questions <a name="tests"></a>
Have any questions? Feel free to email: 

[${data.github}](https://github.com/${data.github})

Email: ${data.email}

`
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
		console.log(data.license.toString())
		const completedMarkdownContent = generateMarkdown(data)
		writeToFile(completedMarkdownContent)
	})
}

init()
