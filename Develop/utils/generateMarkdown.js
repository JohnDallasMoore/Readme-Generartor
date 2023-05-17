function generateMarkdown(answers) {
  
  let licenseBadge;

  switch (answers.license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    default:
      licenseBadge = '';
  };

  return `
  # ${answers.title}
  ---
  ### Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Credits](#Credits)
  - [Contact](#Contact)
  ---
  ### Description
  > ${answers.description}
  ---
  ### Installation
  > ${answers.installation}
  ---
  ### Usage
  > ${answers.usage}
  ---
  ### License
  > ${licenseBadge}
  ---
  ### Credits
  > ${answers.credits}
  ---
  ### Contact
  > For any questions, please feel free to send me an email at ${answers.email}.   
  > Check out my [GitHub](https://github.com/${answers.github}/)
`;
}

module.exports = {
  generateMarkdown
}
