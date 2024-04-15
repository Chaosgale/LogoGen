const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { log } = require('console');

class Logo {
  constructor() {
    this.shapeElement = "";
    this.textElement = "";
  } 
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color, size) {
    this.textElement = `<text x="150" y="${size}" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
    {
      type: 'input',
      name: 'text',
      message: "Enter up to three characters for your logo's text",
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword (OR a hexadecimal number) for your text',
    },
    {
      type: 'list',
      message: 'Choose which shape would you like:',
      name: 'shapes',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword (OR a hexadecimal number) for your shape',
    }
  ]
 
function writeLogoToFile(logoContent) {
  fs.writeFile('logo.svg', logoContent, (err) => {
      if (err) {
          console.error('Error writing logo.svg:', err);
      } else {
          console.log('Generated logo.svg');
      }
  });
}

function makeLogo() {
  let logoContent = "";

  inquirer.prompt(questions)
  .then((answers) => {
    let logoText = "";

    if(answers.text.length > 0 && answers.text.length < 4) {
      logoText = answers.text;
    } else {
      console.log("Please enter 1-3 Characters");
      return;
    }

    let logoFontColor = answers.textColor
    let logoShapeType = answers.shapes
    let logoShapeColor = answers.shapeColor

    let logoSize = "";
    if(logoShapeType !== "circle") {
      logoSize = 150
    } else {
      logoSize = 125
    }
    

    let logoShape;
    if(logoShapeType === "circle") {
      logoShape = new Circle
    } else if (logoShapeType === "square") {
      logoShape = new Square
    } else if (logoShapeType === "triangle") {
      logoShape = new Triangle
    } else {
      console.log("Enter valid shape");
      return;
    }

    logoShape.colorChoice(logoShapeColor)
    
    let logo = new Logo;
    logo.setTextElement(logoText, logoFontColor, logoSize);
    logo.setShapeElement(logoShape)
    logoContent = logo.render();

    writeLogoToFile(logoContent)
  })
    .catch((error) => {
    console.error('Error:', error);
  });
}

makeLogo()