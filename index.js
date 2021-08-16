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

var roles;
var departments;
var employees;
var data;



// db.query("SELECT * FROM roles", function (error, res) {
//   role = res.map(roles => ({ name: roles.title, value: roles.id }))
// })
// db.query("SELECT * FROM departments", function (error, res) {
//   departments = res.map(departments => ({ name: title 
//     , value: department_id }))
// })
// db.query("SELECT * FROM employee", function (error, res) {
 
//   employees = res.map(employees => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))
// })

startUp();



function startUp() {
  inquirer.prompt(
    {
      type: "list",
      message: "Welcome to My EmployeeTracker. What would you like to do?",
      name: "choices",
      choices: [
        {
          name: "View All Departments",
          value: "viewDepartments"
        },
        {
          name: "View All Roles",
          value: "viewRoles"
        },
        {
          name: "View All Employees",
          value: "viewEmployees"
        },
        {
          name: "Add A Department",
          value: "addDepartment"
        },
        {
          name: "Add A Role",
          value: "addRole"
        },
        {
          name: "Add A Employee",
          value: "addEmployee"
        },
        {
          name: "Update A Employee",
          value: "updateRole"
        },
        {
          name: "Quit",
          value: "quit"
        }
      ]
    }).then(function (res){
     
    choices(res.choices)
    })
};

function choices (option) {
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
    case "addDepartment":
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


function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (error, res) {
    console.table(res);
    startUp();
  })
}

function viewAllDepartments() {
  console.log("view all departments")
  db.query("SELECT * FROM departments", function (error, res) {
    console.table(res);
    startUp();
  })
}

function viewAllRoles() {
  db.query("SELECT * FROM roles", function (error, res) {
    console.table(res);
    startUp();
  })
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
      type: "input",
      message: "What is the Employee's Role ID?",
      name: "role_id",
    },
    {
      type: "input",
      message: "What is the Employees Manager ID ?",
      name: "manager_id",
    } 
  ]).then(function (res) {
    db.query(`INSERT INTO employee Set first_name = ?, last_name = ?, role_id = ?, manager_id = ?`, [res.first_name, res.last_name, res.role_id , res.manager_id] , function (error, res)  {
      if (error) throw error;
     viewAllEmployees();
    })
  })
}




function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the Department",
      name: "department_name",
    },
  ]).then(function (res) {
    db.query(`INSERT INTO departments Set department_name = ?`, [res.department_name] , function (error, res) {
      if (error) throw error;
     viewAllDepartments();
    })
  })
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the Role ID",
      name: "role_id",
    },
    {
      type: "input",
      message: "What is your Salary?",
      name: "salary",
    },
    {
      type: "input",
      message: "What is your department ID?",
      name: "department_id",
    }, 
    {
      type: "input",
      message: "What is your title?",
      name: "title",
    } 
  ]).then(function (res) {
    db.query(`INSERT INTO roles Set role_id = ?, title = ?, salary = ?, department_id = ?`, [res.role_id, res.title, res.salary, res.department_id] , function (error, res) {
      if (error) throw error;
     viewAllRoles();
    })
  })
}

function updateRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the Employee Role ID you would like to update?",
      name: "role_id",
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    } 
  ]).then(function (res) {
    db.query(`UPDATE employee set role_id = ? where id = ?`, [res.role_id, res.id] , function (error, res) {
      if (error) throw error;
  });
    viewAllEmployees();

  })
}







