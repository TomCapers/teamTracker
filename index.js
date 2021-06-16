const inquirer = require('inquirer');
const fs = require('fs');

//inquire asks for manager info

//ask if user wishes to fill out other employee positions
    //if not, end enquirer and load html with fs
    //if intern, use inquirer intern question set
    //if engineer, use inquirer engineer question set
    //after question, ask if they want to add another employee

    //.then
        //take answers
        // pass content into the template
        // pass template into fs
        // write new html file into dist folder
        // 


    inquirer
        .prompt([
        {
            type: "input",
            name: "choice",
            message: "Please enter the manager's name.",
                     
        },
        {
            type: "input",
            name: "choice",
            message: "Please enter the employee ID.",
                     
        },
        {
            type: "input",
            name: "choice",
            message: "Please enter the email address.",
                     
        },
        {
            type: "input",
            name: "choice",
            message: "Please enter the office number.",
                     
        },
        {
            type: 'checkbox',
            message: 'Do you wish to add another employee?',
            name: 'role',
            choices: ['Yes', 'No'],
          },

        {
            type: 'checkbox',
            message: 'What is the employees role?',
            name: 'role',
            choices: ['Engineer', 'Intern'],
          },
        ])
        .then((data) => {
            const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        
            fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });
    