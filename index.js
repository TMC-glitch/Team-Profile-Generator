const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");
const generateHtml = require("./src/page-template");

const employees = []


function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the managers name?"
        },

        {
            type: "input",
            name: "managerId",
            message: "What is the managers Id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the managers email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number?",
        }
    ]) .then(answers => {
        const manager = new Manager(answers.manager, answers.managerId, answers.email, answers.officeNumber)
        employees.push(manager);
        createEmployees();
    })
}
function createEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineers name?"
            },
    
            {
                type: "input",
                name: "id",
                message: "What is the engineers Id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers github?",
            }
        ]) .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(engineer);
            createEmployees();
        })
}
function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the interns name?"
        },

        {
            type: "input",
            name: "id",
            message: "What is the interns Id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the interns email?",
        },
        {
            type: "input",
            name: "school",
            message: "Where did the intern go to school?",
        }
    ]) .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(intern);
        createEmployees();
    })
}
// function createHtml(){
//     console.log(employees)
// }

function createEmployees(){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What kind of employee are you adding?",
            choices: ["engineer", "intern", "None"]
        }
    ]) .then(answers => {
        switch (answers.choice) {
            case "engineer": 
                createEngineer()
                break;
                case "intern": 
                createIntern()
                break;
                case "None": 
                const html = generateHtml(employees)
                fs.writeFile("./output/index.html", html, err => {
                 if(err) console.log(err)
                })
                break;
            default:
                break;
        }
    })
}

createManager();