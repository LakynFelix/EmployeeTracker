INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lakyn", "Felix", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Simpson", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chrissy", "Potvin", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jamie", "Lazlo", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Payton", "Moore", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Laine", 2, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 800000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Finance", 123000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal", 280000, 4);

INSERT INTO department (name)
VALUES ("Sales Associate");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Engineer");
INSERT INTO department (name)
VALUES ("Legal");
