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
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Contact](#contact)
  ---
  <a id='description'></a>
  ### Description
  > ${answers.description}
  ---
  <a id='installation'></a>
  ### Installation
  > ${answers.installation}
  ---
  <a id='usage'></a>
  ### Usage
  > ${answers.usage}
  ---
  <a id='license'></a>
  ### License
  > ${licenseBadge}
  ---
  <a id='credits'></a>
  ### Credits
  > ${answers.credits}
  ---
  <a id='contact'></a>
  ### Contact
  > For any questions, please feel free to send me an email at ${answers.email}.   
  > Check out my [GitHub](https://github.com/${answers.github}/)
`;
}

module.exports = {
  generateMarkdown
}
