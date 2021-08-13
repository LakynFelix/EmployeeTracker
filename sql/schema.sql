DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30), NULL,
    last_name VARCHAR(30), NULL,
    role_id VARCHAR(30), NULL,
    manager_id VARCHAR(30), NULL,
    PRIMARY KEY (id),

);

CREATE TABLE  role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    role VARCHAR(30), NULL,
    salary DECIMAL,(10,2),
    department_id INT, NULL,
 PRIMARY KEY (id),
);

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30), NULL,
    PRIMARY KEY (id),
);