// inquirer for team members
// inquirer for information of team members
// create classes for each type of role
// html file generation - writing file

const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");


createManager(){
  inquirer
  .prompt([

 ])
 .then((res)=>{
    // create new instance of manager class using res
 });
}

createMenu(){
  inquirer
  .prompt([
    // engineer, intern or quit
  ])
  .then((res)=>{
    // if statement if intern call intern function, if engineer, call engineer function, if quit call create html 
 });
}

createEngineer(){
  inquirer
  .prompt([

 ])
 .then((res)=>{
    // create new instance of engineer class using res
    // push engineer to engineer array
 });
}

createIntern(){
  inquirer
  .prompt([

 ])
 .then((res)=>{
    // create new instance of intern class using res
    // push to intern array
    // join
 });
}

// new file -generate team function --> nested (generatecard manager, engineer, intern --> push to array and call in new function which would generate skeleton)
createHTML(){
  const interntemplates = internarray.map((intern)=>{
    return ``
  })
  // map over
}