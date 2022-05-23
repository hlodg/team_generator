const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML= require('./utils/generateHTML.js');
const generateEngineer= require('./utils/generateEngineer.js');
const generateIntern =require ('./utils/generateIntern')

const internal = require('stream');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer= require ('./lib/Engineer');

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

var manager;
var intern=[];
var engineer=[];

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answers)=>{
            // const data = generateHTML(answers)
            // console.log(answers)
            // console.log (data)
            // writeToFile('index.html', data)
            manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            console.log (manager)
            createMenu()
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
      case menu[0]:
        createEngineer();
        break;
      case menu[1]:
        createIntern(); 
        break;
      case menu[2]:
        var data = generateHTML(manager, intern, engineer)
        console.log("you are done");
            writeToFile('index.html', data)
      break;
    }
  }
  )
}

function createEngineer(){
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
  .then(({name, id, email, github})=>{
    // const data = generateHTML(engineeranswers)
            // console.log(answers)
            // console.log (data)
            // writeToFile('index.html', data)
        var data= new Engineer (name, id, email, github)
        engineer.push(data)
        console.log(engineer)
        createMenu()
  })
}

function createIntern(){
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
  .then(({name, id, email, school})=>{
    // const data = generateHTML(internanswers)
            // console.log(answers)
            // console.log (data)
            // writeToFile('index.html', data)
            var data = new Intern(name, id, email, school)
            intern.push(data)
            console.log (intern)
            createMenu()
})
}

// Function call to initialize app
init();
