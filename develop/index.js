// inquirer for team members
// inquirer for information of team members
// create classes for each type of role
// html file generation - writing file

const inquirer = require("inquirer");
const fs = require('fs');

const role= [
    {
      type: 'list',
      name: 'role',
      message: 'What is thier role?',
      choices: 'manager, engineer, intern',
    }
  ];


runNewQuest(answers) {
    if (answers.role==="manager"){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is thier name?',
                },
                {
                    type: 'input',
                    name: 'git',
                    message: 'What is thier github username?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is thier email?',
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'What is thier office number?',
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: 'What is thier employee ID?',
                },
            ])
            .then((managerAns) => {
                return managerAns;
                })
    }
    else if(answers.role==="engineer"){
     inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is thier name?',
            },
            {
                type: 'input',
                name: 'git',
                message: 'What is thier github username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is thier email?',
            },
          
            {
                type: 'input',
                name: 'ID',
                message: 'What is thier employee ID?',
            },
        ])
        .then((engineerAns) => {
            return engineerAns;
            })
    }else if(answers.role==="engineer"){
     inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is thier name?',
            },
            {
                type: 'input',
                name: 'git',
                message: 'What is thier github username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is thier email?',
            },
          
            {
                type: 'input',
                name: 'ID',
                message: 'What is thier employee ID?',
            },
        ])
        .then((engineerAns) => {
            return engineerAns;
            })
    }
    else if(answers.role==="intern"){
        inquirer
           .prompt([
               {
                   type: 'input',
                   name: 'name',
                   message: 'What is thier name?',
               },
               {
                   type: 'input',
                   name: 'email',
                   message: 'What is thier email?',
               },
               {
                   type: 'input',
                   name: 'ID',
                   message: 'What is thier student ID?',
               },
               {
                type: 'input',
                name: 'school',
                message: 'What is thier sschool?',
            },
           ])
           .then((internAns) => {
               return internAns;
               })
       }

};

inquirer
    .prompt(role)
    .then((answers) => {
        return runNewQuest();
        })
      .catch((error) => {
        if (error.isTtyError) {
            return "There is an error."
        } else {
            return "Something else went wrong."
        }
      });