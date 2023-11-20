const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')

const { Shape, Circle, Square, Triangle } = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters.',
        validate: (data) => data.length <=3 || 'A maximum of 3 characters is allowed. Try again.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter a standard color you'd like your text to be.",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter a standard color you'd like your logo to be."
    }
]

const init = () => {
    inquirer.prompt(questions).then(data => {
        console.log(data)
    })
}

init()