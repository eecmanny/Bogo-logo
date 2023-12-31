
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
                message: 'Please choose Choose three Characters?',
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
                    logo = new Circle();
                    // console.log(data.Shape);
                    // console.log(data.Color);
                    // console.log(logo);
                    break;
                case 'Square':
                    logo = new Square();
                    break;
                case 'Triangle':
                    logo = new Triangle();
                    break;
                default:
                    console.log('Shape not recognized');
                    return;
            }

logo.setColor(answers.Color);
            


            const pLogoContent = new Logo();
            pLogoContent.setText(answers.Text, answers.TextColor);
            pLogoContent.setShape(logo);

            console.log(answers);

            fs.writeFile('logo.svg', pLogoContent.render(), (err) =>
                err ? console.log(err) : console.log('Successfully Generated logo.svg!')
            );
        });


function init() {
    generateLogoQuestions();
};


init();

