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

askForEmployee() {
    return inquirer
        .prompt([
        {
            type: "input",
            name: "choice",
            message: "Please enter the anager's name.",
                     
        }
        ])
    }