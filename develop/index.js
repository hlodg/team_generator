// inquirer for team members
// inquirer for information of team members
// create classes for each type of role
// html file generation - writing file

const inquirer = require("inquirer");
const fs = require('fs');

const questionsAll= [
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee name?',
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is thier role?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is thier email?',
      },
    {
        type: 'input',
        name: 'git',
        message: 'What is thier github username?',
    },
  ]


inquirer
    .prompt(questionsAll)