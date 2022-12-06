function renderLicenseBadge(license) {
	if (license.length === 0) {
		return ''
	}
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

function renderLicenseLink(license) {
	if (license.length === 0) {
		return ''
	}
	switch (license) {
		case 'MIT':
			return `https://opensource.org/licenses/MIT`
		case 'GNU':
			return `https://www.gnu.org/licenses/gpl-3.0`
		case 'Apache':
			return `https://opensource.org/licenses/Apache-2.0`
		case 'ISC':
			return `https://opensource.org/licenses/ISC`
		case 'Mozilla':
			return `https://opensource.org/licenses/MPL-2.0`
		default:
			'No license provided.'
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return `## License 

  Here is the license that this project is covered under: ${renderLicenseLink(
		license.license.toString()
	)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `${renderLicenseBadge(data.license.toString())}
  
  # ${data.title}
  
  ${renderLicenseSection(data)}
  
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
  
  ${data.tests}
  
  ## Questions <a name="tests"></a>
  Have any questions? Feel free to contact me via GitHub or email. 
  
  [Link to GitHub account](https://github.com/${data.github})
  
  Email: ${data.email}
`
}

module.exports = generateMarkdown
