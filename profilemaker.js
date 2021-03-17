const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];



function addMember () {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Choose member job title",
        choices: [
            "Intern",
            "Engineer",
            "Manager"
        ],
        name: "job-title"
    },
    {
        message: "Enter employee's ID number",
        name: "id"
    },
    {
        message: "Enter employee's email address",
        name: "email"
    }
])
.then (function({name, role, id, email}){

    let jobInfo = "";

    if (job === "Manager") {
        roleInfo = "Office Number";

    }else if (job === "Engineer") {
        roleInfo = "GitHub Account";

    }else (job === Intern) {
        roleInfo = "School Name";
    }
    inquirer.prompt([{
        message: `Please provide employee's ${roleInfo}`,
        name: "jobInfo"
    },
    {
        type: "list",
        message: "Would you like to add an employee?",
        choices: [
            "yes",
            "no",
        ],
        name: "addEmployee"
    }])
    .then(function({jobInfo, addEmployee}){
        let newEmployee;
        if (job === "Intern") {
            newEmployee = new Intern(name, id, email, roleInfo);

        }else if (role ===Engineer) {
            newEmployee = new Engineer(name, id, email, roleInfo);

        }else  {
            newEmployee = new Manager(name, id, email, roleInfo);
        }
        employees.push(newMember);
        addHtml(newEmployee)
        .then(function() {
            if (addEmployee === "yes") {
                addEmployee();
            } else {
                finishHtml();
            }    
            

            
        });
    });

    
})};
