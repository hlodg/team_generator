const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML= require('./utils/generateHTML.js')

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message:"What is your Manager's name?"
      },
      {
        type: "input",
        name: "id",
        message:"What is your Manager's id?"
      },
      {
        type: "input",
        name: "email",
        message:"What is your Manager's email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message:"What is your Manager's office number?"
      }
      ];

function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data)
  } catch (error) {
      console.log(error)
  }
}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers)=>{
            const data = generateHTML(answers)
            // console.log(answers)
            // console.log (data)
            writeToFile('index.html', data)
        });
}

// Function call to initialize app
init();

