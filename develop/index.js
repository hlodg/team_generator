const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML= require('./utils/generateHTML.js');
const generateEngineer= require('./utils/generateEngineer.js');
const generateIntern =require ('./utils/generateIntern')

const internal = require('stream');

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
            // const data = generateHTML(answers)
            // console.log(answers)
            // console.log (data)
            // writeToFile('index.html', data)
            createMenu(answers)
        });
}

const menu = ["engineer", "intern", "quit"]

function createMenu(){
  inquirer
  .prompt([
    {
      type: "list",
      name: "roletype",
      message: "what role do you want to add?",
      choices: menu
    }
  ])
  .then((role)=>{
    switch(role.roletype){
      case role[0]:
        engineer();
        break;
      case role[1]:
        intern(); 
        break;
      case role[3]:
        console.log("you only added a manager");
      break;
    }
  }
  )
}

function engineer(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message:"What is your engineer's name?"
    },
    {
      type: "input",
      name: "id",
      message:"What is your engineer's id?"
    },
    {
      type: "input",
      name: "email",
      message:"What is your engineer's email?"
    },
    {
      type: "input",
      name: "github",
      message:"What is your engineer's github?"
    }
  ])
  .then((engineeranswers)=>{
    const data = generateHTML(engineeranswers)
            // console.log(answers)
            // console.log (data)
            writeToFile('index.html', data)
  })
}

function intern(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message:"What is your intern's name?"
    },
    {
      type: "input",
      name: "id",
      message:"What is your intern's id?"
    },
    {
      type: "input",
      name: "email",
      message:"What is your intern's email?"
    },
    {
      type: "input",
      name: "school",
      message:"What is your student's school?"
    }
  ])
  .then((internanswers)=>{
    const data = generateHTML(internanswers)
            // console.log(answers)
            // console.log (data)
            writeToFile('index.html', data)
})
}

// Function call to initialize app
init();
