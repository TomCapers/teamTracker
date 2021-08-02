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
    ]).then((answer) => {
        const manager = new Manager(answer.managerChoice, answer.managerId, answer.managerEmail, answer.managerNumber);
        memberArr.push(manager);
        askQuests();
    });
        
    function askQuests(){
        inquirer.prompt([
            {
                type: 'list',
                message: 'Do you wish to add another employee?',
                name: 'addEmployee',
                choices: ['Yes', 'No'],
              },
    
            // {
            //     type: 'checkbox',
            //     message: 'What is the employees role?',
            //     name: 'role',
            //     choices: ['Engineer', 'Intern'],
            //   },
            ]).then((answer) => {
                if (answer.addEmployee === 'No'){
                    createHtml();
                }
                else {
                    askRole();
                }

            //     else if (answer.role === 'Engineer'){
            //         engineerQuestion();

            //     }else if (answer.role === 'Intern'){
            //         internQuestion();
            // }
                });
            
            };
        function askRole() {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'What is the employees role?',
                    name: 'role',
                    choices: ['Engineer', 'Intern'],
                  }, 
            ]).then((answer) => {
                if (answer.role === 'Engineer'){
                    engineerQuestion();
                }
                else {
                    internQuestion();
                }
            })
        };

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
            ]).then((answer) =>{
                const engineer = new Engineer(answer.engineerChoice, answer.engineerId, answer.engineerEmail, answer.engineerGitHub);
                memberArr.push(engineer);
                askQuests();
            });
        };    

                function internQuestion(){
                    inquirer.prompt([
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
                    ]).then((answer) =>{
                        const intern = new Intern(answer.internChoice, answer.internId, answer.internEmail, answer.internSchool);
                        memberArr.push(intern);
                        askQuests();
                    });
                };
                    function createHtml(){
                        var htmlstr = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                    `;
                    for(var i = 0; i < memberArr.length; i++){  
                        htmlstr += 
                    `<div class="employee">
                        <h1>name: ${memberArr[i].getName()}</h1>
                        <h2>role: ${memberArr[i].getRole()}</h2>
                        <p>id: ${memberArr[i].getId()}</p>
                        <p>email: <a href="mailto:${memberArr[i].getEmail()}">${memberArr[i].getEmail()}</a></p>
                    `;
                    if(memberArr[i].getRole() === 'Manager'){
                        htmlstr += 
                        `<p>office number: ${memberArr[i].getOfficeNumber()}</p>
                        `;
                    }else if(memberArr[i].getRole() === 'Engineer'){
                        htmlstr += 
                        `<p>github: <a href="${memberArr[i].getGithub()}">${memberArr[i].getGithub()}</a></p>
                        `;
                    }else if(memberArr[i].getRole() === 'Intern'){
                        htmlstr += 
                        `<p>school: ${memberArr[i].getSchool()}</p>
                        </div>
                        `;
                    }
                    }
                    htmlstr += 
                    `</body>
                    </html>`;
                    fs.appendFile('home.html', `${htmlstr}\n`, (err) =>
                        err ? console.error(err) : console.log(htmlstr)
                    );
                }              
                ;
                    

                