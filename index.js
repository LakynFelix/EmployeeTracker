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



db.query("SELECT * FROM roles", function (error, res) {
  role = res.map(roles => ({ name: roles.title, value: roles.id }))
})
db.query("SELECT * FROM departments", function (error, res) {
  departments = res.map(departments => ({ name: title 
    , value: department_id }))
})
db.query("SELECT * FROM employee", function (error, res) {
 
  employees = res.map(employees => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))
})

StartUp();



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
     
    startUp(res.choices)
    })
};

function StartUp(option) {
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


function viewAllEmployees() {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function (error, res) {
    console.table(res);
    closeMenu\();
  })
}

function viewAllDepartments() {
  console.log("view all departments")
  connection.query("SELECT * from departments", function (error, res) {
    console.table(res);
    closeMenu();
  })
}

function viewAllRoles() {
  connection.query("SELECT * from roles", function (error, res) {
    console.table(res);
    closeMenu();
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

db.query("INSERT INTO employee ",
{
  first_name: data.firstName,
  last_name: data.lastName,
  role_id: data.title,
  manager_id: data.manager
}, function (error, res) {
  if (error) throw error;
})
closeMenu();


function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the name of the Department",
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
db.query("INSERT INTO role ",
{
  role_id: data.title,
  salary: data.salary,

}, function (error, res) {
  if (error) throw error;
})
closeMenu();


function updateRole() {
  inquirer.prompt([
    {
      type: "list",
      message: "What Employee would you like to update?",
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

function updateEmployeeRole(data) {
  db.query(`UPDATE Employee role_id = ${data.titleID} WHERE id = ${data.empoyeeID}`,
  function (error, res) {
    if (error) throw error;
  });
  closeMenu();
}

function closeMenu() {
  confirm("Would you like to continue?")
  .then(function confirmed() {
    StartUp();
  }, function cancelled() {
    end();
  });
}



