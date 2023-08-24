
const inquirer = require('inquirer');
const Logo = require('./lib/writeLogo');
const fs = require('fs');
// const {writeFile} = require('fs');
const { Triangle, Square, Circle } = require('./lib/generateColor');

const generateLogoQuestions = () =>
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'Shape',
                message: 'What shape do you want your Logo?',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'Color',
                message: 'Please choose a logo color (Either, Color or Hexidecimal format)?',
            },
            {
                type: 'input',
                name: 'Text',
                message: 'Please choose Choose three Chracracters?',
            },
            {
                type: 'input',
                name: 'TextColor',
                message: 'Please choose a logo color (Either, Color or Hexidecimal format)?',
            },
        ])
        .then((answers) => {
            let logo;

            switch (answers.Shape) {
                case 'Circle':
                    logo = new Circle(answers.Shape, answers.Color);
                    // console.log(data.Shape);
                    // console.log(data.Color);
                    // console.log(logo);
                    break;
                case 'Square':
                    logo = new Square(answers.Shape, answers.Color);
                    break;
                case 'Triangle':
                    logo = new Triangle(answers.Shape, answers.Color);
                    break;
                default:
                    console.log('Shape not recognized');
                    return;
            }


            
            // const shapeSqaure = new Square(`${data.Color}`);
            // const shapeTriangle = new Triangle(`${data.Color}`);


            // shapeCircle = new Logo(answers);

            const pLogoContent = new Logo(answers);
            console.log(answers);

            fs.writeFile('logo.svg', logo.render(), (err) =>
                err ? console.log(err) : console.log('Successfully created logo.svg!')
            );
        });


function init() {
    generateLogoQuestions();
};

// Function call to initialize app
init();

// module.exports = generateLogoQuestions;