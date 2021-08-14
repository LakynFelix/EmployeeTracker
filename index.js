 const mysql = require("mysql2");
const cTable = require('console.table');
const inquirer = require('inquirer');
const { response } = require("express");

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    password: '',
    database: 'employeedb'
  },
  console.log(`Connected to the employeedb database.`)
);

const role;
const departments;
const employees;

// simple query
db.query("SELECT * FROM roles", function (error, res) {
  role = res.map(roles => ({ name: roles.title, value: role.id }))
})
db.query("SELECT * FROM departments", function (error, res) {
  departments = res.map(dep => ({ name: dep.name, value: dep.id }))
})
connection.query("SELECT * FROM employee", function (error, res) {
 
  employees = res.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }))
})

listMenu();


Function listMenu()  {
  inquirer.prompt(
    {
      type: "list",
      message: "Welcome to My EmployeeTracker. What would you like to do first?",
      name: "choices",
      choices: [
        {
          name: "View All Employees",
          value: "viewEmployees"
        },
        {
          name: "View All Departments",
          value: "viewDepartments"
        },
        {
          name: "View All Roles",
          value: "viewRoles"
        },
        {
          name: "Add A Employee",
          value: "addEmployee"
        },
        {
          name: "Add A Department",
          value: "addDepartment"
        },
        {
          name: "Add  A Role",
          value: "addRole"
        },
        {
          name: "Update A Role",
          value: "updateRole"
        },
        {
          name: "Quit ",
          value: "quit"
        }
      ]
    }).then(function (res){
     
    listMenu(res.choices)
  })
}

function listMenu(option) {
  switch (option) {
    case "viewEmployees":
      viewAllEmployees();
      break;
    case "viewDepartments":
      viewAllDepartments();
      break;
    case "viewRoles":
      viewAllRoles();
      break;
    case "addEmployee":
      addEmployee();
      break;
    case "addDept":
      addDepartment();
      break;
    case "addRole":
      addRole();
      break;
    case "updateRole":
      updateRole();
      break;
    case "quit":
      end();
  }
}

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the first name of the Employee",
      name: "first_name",
    },
    {
      type: "input",
      message: "Enter the last name of the Employee",
      name: "last_name",
    },
    {
      type: "list",
      message: "What is the Employee's Title?",
      name: "title",
      choices: roles,
    },
    {
      type: "list",
      message: "Who is the Employees Manager ?",
      name: "manager_id",
      choices: employees,
    } 
  ]).then(function (res) {
    addEmployee(response)
  })
}


function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the apartment",
      name: "department_name",
    },
    {
      type: "list",
      message: "What is the Department's Manager?",
      name: "manager_id",
      choices: employees,
    } 
  ]).then(function (res) {
    addDepartment(response)
  })
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the Role",
      name: "role_id",
    },
    {
      type: "list",
      message: "What is your Salary?",
      name: "salary",
      choices: departments,
    } 
  ]).then(function (res) {
    addRole(response)
  })
}