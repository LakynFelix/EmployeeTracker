INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lakyn", "Felix", 1, 2),
("Sam", "Simpson", 2, 1),
 ("Chrissy", "Potvin", 3, null),
("Jamie", "Lazlo", 4, 2),
 ("Payton", "Moore", 1, null),
 ("Alex", "Laine", 2, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Associate", 800000, 1),
 ("Finance", 123000, 2),
 ("Engineer", 100000, 3),
 ("Legal", 280000, 4);

INSERT INTO departments (department_name)
VALUES ("Sales Associate"),
 ("Finance"),
 ("Engineer"),
 ("Legal");
