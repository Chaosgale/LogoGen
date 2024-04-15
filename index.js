const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes')

inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: "Enter up to three characters for your logo's text",
    },
    {
      type: 'input',
      name: 'text-color',
      message: 'Enter a color keyword (OR a hexadecimal number) for your text',
    },
    {
      type: 'list',
      message: 'Choose a license for your project:',
      name: 'shapes',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shape-color',
      message: 'Enter a color keyword (OR a hexadecimal number) for your shape',
    }
  ])
  .then((answers) => {

    const logoContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${answers.shapes} cx="150" cy="100" r="80" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
  </svg>`

    fs.writeFile('logo.svg', logoContent, (err) => {
        if (err) {
          console.error('Error writing logo.svg:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });