// Packages needed for this application 
const inquirer = require('inquirer'); // npm import
const fs = require('fs'); // file system import
const { Circle, Triangle, Square } = require('./library/shapes') // ./library/shapes file import

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
        // Validate the user can only enter three characters
        validate: (text) => text.length <= 3 || "The logo text length must be three characters or less."
    },
    {
        // Text colour input
        type: "input",
        name:"textColour",
        message: "Enter a colour for text:",
    },
    {
        // Shape input
        // List type to prompt user to choose from one of three shapes/choices
        type: "list",
        name:"shape",
        message: "Choose a shape for logo:",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        // Shape colour input
        type: "input",
        name: "shapeColour",
        message: "Enter a colour for logo shape:",
    },
];

// Function created to write data to file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("Complete! Your SVG logo has been generated!");
    })
}

// Function created to initialize application
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        let shape; 
        // Conditional statements takes users input from const questions and adds to SVG string
        if (userInput.shape === "Circle") {shape = new Circle(userInput.text, userInput.textColour, userInput.shapeColour)}
        else if (userInput.shape === "Square") {shape = new Square(userInput.text, userInput.textColour, userInput.shapeColour)}
        else {shape = new Triangle(userInput.text, userInput.textColour, userInput.shapeColour)}
        const svg_file = shape.render()
        writeToFile("svg_file.svg", svg_file);
    });
};

// Function call to initialize application
init();