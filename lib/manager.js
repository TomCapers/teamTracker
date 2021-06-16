// class manager extends employee
    //define constructor
    //office num prop

const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber(){
        return this.officeNumber
    };
    
    getRole(){
       return "Manager" 
    };
};


module.exports = Manager;


//get office num method
//get role method
    // get role = manager