import inquirer from "inquirer";
import addDepartment from "../src/addDepartment.js";
import addEmployee from "./addEmployee.js";
import addRole from "./addRole.js";
import getAllDepartments from "./getAllDepartments.js";
import getAllEmployees from "./getAllEmployees.js";
import getAllRoles from "./getAllRoles.js";
import getEmployee from "./getEmployee.js";
import updateRole from "./updateRole.js";


class Cli {
    [x: string]: any;
    updates: (addDepartment | addEmployee | addRole | getAllDepartments | getAllEmployees | getAllRoles | getEmployee | updateRole)[];
    exit: boolean = false;


constructor(updates: (addDepartment | addEmployee | addRole | getAllDepartments | getAllEmployees | getAllRoles | getEmployee | updateRole)[]) {
    this.updates = updates;
}



chooseUpdate(): void {
    inquirer
        .prompt([
            {
             type:'list',
             name:'updateType',
             message:'Which would you like to choose',   
             choices: ['addDepartment', 'addEmployee', 'addRole', 'getAllDepartments', 'getAllEmployees', 'getAllRoles', 'getEmployee', 'updateRole'],
            },
        ])
        .then((answers) => {
            if (answers.updateType === 'addDepartment') {
                this.createDepartment();
            }else if (answers.updateType === 'addEmployee') {
                this.createEmployee();
            }else if (answers.updateType === 'addRole') {
                this.createRole();
            }else if (answers.updateType === 'getAllDepartments') {
                this.createAlldepartments();
            }else if (answers.updateType === 'getAllEmployees') {
                this.createAllEmployees();
            }else if (answers.updateType === 'getAllRoles') {
                this.createAllRoles();
            }else if (answers.updateType === 'getEmployee') {
                this.createEmployee();
            }else if (answers.updateType === 'updateRole') {
                this.createUpdateRole();
            }
        });
}

createDepartment(): void {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter id'
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter department name'
            }
        ])
        .then((answers) => {
            const newDepartment = new addDepartment(
                answers.department_id,
                answers.name,
                []
            );
            this.updates.push(newDepartment);
            this.performActions();
        });
            
    }
