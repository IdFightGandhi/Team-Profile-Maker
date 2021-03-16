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

    let roleInfo = "";

    if (role === "Manager") {
        roleInfo = "Office Number";

    }else if (role === "Engineer") {
        roleInfo = "GitHub Account";

    }else (role === Intern) {
        roleInfo = "School Name";
    }

    
    }
    
})
}
