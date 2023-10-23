const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateShape');
const validateColor = require('validate-color').default;

// Questions block for inquirer to prompt to user
const questions = [
    {
        // question for text (limited to between 1 and 3 characters)
        type: 'input',
        message: 'Please type 1-3 characters for your logo:',
        name: 'text',
        validate: async (input) => {
            if (input.length < 1 || input.length > 3) {
                return 'Improper length! Try again.'
            }
            return true;
        },
    },
    {
        // question for text color
        // can be color name or hex value
        // test for valid color
        type: 'input',
        message: 'What color would you like the text? Please enter a color name or hex value.',
        name: 'textColor',
        validate: validateColor,
    },
    {
        // question for shape
        // pick from a list (triangle, circle, or square)
        type: 'list',
        name: 'shape',
        message: 'Please select a shape:',
        choices: [
            {
                name: 'Triangle',
            },
            {
                name: 'Circle',
            },
            {
                name: 'Square',
            }
        ],
        default: 'Circle',
    },
    {
        // question for shape color
        // can be color name or hex value
        // test for valid color
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor',
        validate: validateColor,
    }
];

function writeToFile(fileName, data) {
    let text = generateSVG(data);

    fs.writeFile(fileName, text, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg');
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("./YourSVGFolder/logo.svg", response);
        });
}

init();