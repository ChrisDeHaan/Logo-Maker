const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')

const { Shape, Circle, Square, Triangle } = require('./lib/shapes')
const Svg = require('./lib/svg')

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
        let newShape = ''
        let shapeSelected = data.shape
        if (shapeSelected === 'Circle') {
            newShape = new Circle()
        } else if (shapeSelected === 'Square') {
            newShape = new Square()
        } else if (shapeSelected === 'Triangle') {
            newShape = new Triangle()
        }
        newShape.setColor(data.shapeColor)

        const svgOutput = new Svg()
        svgOutput.setShape(newShape)
        svgOutput.setText(data.text, data.textColor)

        return writeFile(`./examples/${data.shape}.svg`, svgOutput.render()).then(() => {
            console.log('New SVG created. Enjoy your new logo!')
        }).catch((err) => {
            console.log('Something went wrong...')
            console.err(err)
        })
    })
}

init()