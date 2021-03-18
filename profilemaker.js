const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require('path');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'index.html');

const employees = [];

function startTeamBuilder() {
    startHtml();
    addMember();
}



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
        message: "Enter employee ID number",
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

    }else if (role === "Intern") {
        roleInfo = "School Name";
    }
    inquirer.prompt([{
        message: `Please provide employee's ${roleInfo}`,
        name: "roleInfo"
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
    .then(function({roleInfo, addEmployee}){
        let newEmployee;
        if (roleInfo === "Intern") {
            newEmployee = new Intern(name, id, email, roleInfo);

        }else if (role ===Engineer) {
            newEmployee = new Engineer(name, id, email, roleInfo);

        }else  {
            newEmployee = new Manager(name, id, email, roleInfo);
        }
        employees.push(newEmployee);
        console.log(employees);
        addHtml(newEmployee)
        .then(function() {
            if (addEmployee === "yes") {
                // addEmployee();

            } else {
                finishHtml();
            }    
            

            
        });

    });

    
    
})};

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class ="navbar-brand mb-0 h1 w-100 text-center">Team</span>
    </nav>
    
    <div class="container">
        <div class="row">`;
    fs.writeFile("./index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject){
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
            </div>
        </div>`;
        } else if (role==="Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>`
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">Contact Number: ${officePhone}</li>
                </ul>
            </div>
        </div>`
        }
        console.log("check add");
        fs.appendFile("./index.html", data, function (err) {
            if(err) {
                return reject(err);
            };
            return resolve();
        });
    });

}
function finishHtml() {
    const html = `</div>
    </div>
        
    </body>
    </html>`;

    fs.appendFile("./index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log ("finish check");
};

startTeamBuilder();

