
const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./utils/generateLogo');


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
        ])
        .then((answers) => {
            const pLogoContent = Logo(answers);


            fs.writeFile('logo.svg', pLogoContent, (err) =>
                err ? console.log(err) : console.log('Successfully created logo.svg!')
            );
        });


function init() {
    generateLogoQuestions();
};

// Function call to initialize app
init();
