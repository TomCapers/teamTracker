// class intern extends employee
    // define constructor
    // school prop

const Employee = require("./employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    };

    getSchool(){
        return this.school;
    
    };
    
    getRole(){
        return "Intern"
    };
    
    };

    module.exports = Intern;

// get school method
// get role method
    // get role = intern