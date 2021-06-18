const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let memberArr = [];





    inquirer.prompt([
        {
            type: "input",
            name: "managerChoice",
            message: "Please enter the manager's name.",
                     
        },
        {
            type: "input",
            name: "managerId",
            message: "Please enter the employee ID.",
                     
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the email address.",
                     
        },
        {
            type: "input",
            name: "managerNumber",
            message: "Please enter the office number.",
                     
        },
    ]).then(answer => {
        const manager = new Manager(answer.managerChoice, answer.managerId, answer.managerEmail, answer.managerNumber);
        memberArr.push(manager);
        askQuests();
    });
        
    function askQuests(){
        inquirer.prompt([
            {
                type: 'checkbox',
                message: 'Do you wish to add another employee?',
                name: 'addEmployee',
                choices: ['Yes', 'No'],
              },
    
            {
                type: 'checkbox',
                message: 'What is the employees role?',
                name: 'role',
                choices: ['Engineer', 'Intern'],
              },
            ]).then((data) => {
                if (data.addEmployee === 'No'){
                    createHtml();
                }

                else if (data.role === 'Engineer'){
                    engineerQuestion();

                }else if (data.role === 'Intern'){
                    internQuestion();
            }
                });
            

        function engineerQuestion() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "engineerChoice",
                    message: "Please enter the engineer's name.",
                                
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Please enter the employee ID.",
                                
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Please enter the email address.",
                        
                    },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "Please enter the git hub user name.",
                },
            ]).then(data =>{
                const engineer = new Engineer(data.engineerChoice, data.engineerId, data.engineerEmail, data.engineerGitHub);
                memberArr.push(engineer);
                askQuests();
            });
        };    

                function internQuestion(){
                    inquier.prompt([
                        {
                            type: "input",
                            name: "internChoice",
                            message: "Please enter the Intern's name.",
                                     
                        },
                        {
                            type: "input",
                            name: "internId",
                            message: "Please enter the employee ID.",
                                     
                        },
                        {
                            type: "input",
                            name: "internEmail",
                            message: "Please enter the email address.",
                                
                            },
                        {
                            type: "input",
                            name: "internSchool",
                            message: "Please enter the school the intern graduated from.",
                                
                            }, 
                    ]).then(data =>{
                        const intern = new Intern(data.internChoice, data.internId, data.internEmail, data.internSchool);
                        memberArr.push(intern);
                        askQuests();
                    });
                };
                    function createHtml(){
                        let htmlString = htmlquery()
                        fs.writeFile('./dist/index.html', htmlString, 'utf-8');
                    };
                };
                    

                