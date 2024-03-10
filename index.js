// Packages needed for this application 
const inquirer = require('inquirer'); // npm package
const fs = require('fs'); // file system

// Array of questions created for user input
// Input / questions for SVG  
const questions = [
    {
        type: "input",
        name:"text",
        message: "Enter three characters for logo:",
    },
    {
        type: "input",
        name:"text-colour",
        message: "Enter a colour for text:",
    },
    {
        type: "input",
        name:"shape",
        message: "Choose a shape for logo:",
        choices: ["Circle, Triangle, Square"],
    },
    {
        type: "input",
        name: "shape-colour",
        message: "Enter a colour for logo shape:",
    },
]