// // inquirer for team members
// // inquirer for information of team members
// // create classes for each type of role
// // html file generation - writing file

// const inquirer = require("inquirer");
// const fs = require('fs');
// const generateHTML = require("generateHTML");


// createManager(){
//   inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message:"What is your Manager's name?"
//     },
//     {
//       type: "input",
//       name: "id",
//       message:"What is your Manager's id?"
//     },
//     {
//       type: "input",
//       name: "email",
//       message:"What is your Manager's email?"
//     },
//     {
//       type: "input",
//       name: "officeNumber",
//       message:"What is your Manager's office number?"
//     }
//  ])
//  .then((res)=>{
//     // create new instance of manager class using res
//     return `<div class="row">
// <div class="col s12 m7">
//   <div class="card">
//     <div class="card-image">
//       <img src="./Assets/10-object-oriented-programming-homework-demo.png">
//       <span class="card-title">Manager</span>
//     </div>
//     <div class="card-content">
//       <h1>${res.name}</h1>
//       <p>id: ${res.id}</p>
//       <p>email: ${res.email}</p>
//       <p>office number: ${res.officeNumber}</p>
//     </div>
//     <div class="card-action">
//       <a href="#">This is a link</a>
//     </div>
//   </div>
// </div>
// </div>`
 
//   });
// }

// createMenu(){
//   inquirer
//   .prompt([
//     // engineer, intern or quit
//   ])
//   .then((res)=>{
//     // if statement if intern call intern function, if engineer, call engineer function, if quit call create html 
    
//   });
// }

// createEngineer(){
//   inquirer
//   .prompt([

//  ])
//  .then((res)=>{
//     // create new instance of engineer class using res
//     // push engineer to engineer array
//  });
// }

// createIntern(){
//   inquirer
//   .prompt([

//  ])
//  .then((res)=>{
//     // create new instance of intern class using res
//     // push to intern array
//     // join
//  });
// }

// // new file -generate team function --> nested (generatecard manager, engineer, intern --> push to array and call in new function which would generate skeleton)
// createHTML(){
//   const interntemplates = internarray.map((intern)=>{
//     return ``
//   })
//   // map over
// }