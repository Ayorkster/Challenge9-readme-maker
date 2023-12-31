

function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = ''
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/license-mit-green.svg)`
  } else if (licenseType === 'Apache') {
    yourLicense = `![License: Appache](https://img.shields.io/github/license/saltstack/salt)`
  } else if (licenseType === 'ISC') {
    yourLicense = `![ISC](https://img.shields.io/pypi/l/xpanse)`
  } else {
    licenseType = 'None'; // or any default value you want
}
  return yourLicense;
};

function renderLicenseLink(license) {
  let licenseType = license;
  let licenseLink = ''
  if (licenseType === 'MIT') {
    licenseLink = `[License: MIT](https://www.mit.edu/~amini/LICENSE.md)`
  } else if (licenseType === 'Apache') {
    licenseLink = `[License: Appache](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  } else if (licenseType === 'ISC') {
    licenseLink = `[License: ISC](https://www.mozilla.org/en-US/MPL/2.0/)`
  } else {
    licenseType = 'None'; // or any default value you want
}
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { console.log(license);
  if(license != "None"){

    return `## License 
${license}\n
${renderLicenseBadge(license)}\n
${renderLicenseLink(license)}`
  }

  return ""
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  For additional questions, contact ${data.email}.
  GitHub: [${data.username}](https://github.com/${data.username})}
`;
}

module.exports = generateMarkdown;
