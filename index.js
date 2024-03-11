// Packages needed for this application 
const inquirer = require('inquirer'); // npm package
const fs = require('fs'); // file system
const shapes = require('./library/shapes')

console.log("This is my command-line SVG Logo Maker!");
console.log("The following questions will generate a SVG logo once answered.");

// Array of questions created for user input
// Input / questions for SVG  log options 
// Objects with type, name and message properties and choices for the shape options
// When node index.js is entered in the terminal it will go through these questions for the user to answer 
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
];

// Function created to write data to SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("Complete! You can preview your SVG logo.");
    })
};

// Const created to add user inputs to SVG file
// let svg = new Svg();
// svgString = svg.render();

// Function created to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile(svg_file, svgString);
    });
};

// User text input 
let user_text = "";
if(answers.text.length === 3) {
    user_text = answers.text;
} else {
    console.log("The logo text length is not three characters. Please enter three characters.")
return;
}



init();