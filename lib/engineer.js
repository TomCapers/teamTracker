//engineer will extend employee
    //define constructor
    //github name
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    };

    getGithub(){
        return this.github;
    
    };
    
    getRole(){
        return "Engineer";
    
    }
}

module.exports = Engineer;
// get github method
// get role method
    //get role = engineer
