// Packages needed for this application 
const inquirer = require('inquirer'); // npm import
const fs = require('fs'); // file system import
const Shapes = require('./library/shapes') // ./library/shapes file import

console.log("This is my command-line SVG Logo Maker!");
console.log("The following questions will generate a SVG logo once answered.");

// Array of questions created for user input
// Objects with type, name and message properties and choices for the shape options
// When node index.js is entered in the terminal it will go through these questions/statements for the user to answer 
const questions = [
    {
        // Text input
        type: "input",
        name:"text",
        message: "Enter three characters for logo:",
    },
    {
        // Text colour input
        type: "input",
        name:"text-colour",
        message: "Enter a colour for text:",
    },
    {
        // Shape input
        type: "input",
        name:"shape",
        message: "Choose a shape for logo:",
        choices: ["Circle, Triangle, Square"],
    },
    {
        // Shape colour input
        type: "input",
        name: "shape-colour",
        message: "Enter a colour for logo shape:",
    },
];

// Function created to write data to SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, svg, (error) => 
    if (error) {
    return console.log(error);
    }
    // If no error below text is shown in command line 
    console.log("Complete! You can preview your SVG logo."));
};

// Const created to add user inputs to SVG file
// let svg = new Svg();
// svgString = svg.render();

// Function created to initialize app
function init() {
    inquirer.prompt(questions)
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