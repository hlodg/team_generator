const package = require('dotenv').config();
const inquirer = require('inquirer');

const Employee = require("./lib/Employee");

// Initialize a new Game object
const employee = new Employee();

employee.getName();
