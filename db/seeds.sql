/*Seed the database with different burgers*/
INSERT INTO burgers (burger_name, devoured) VALUES ("Thurmanator", false);   
INSERT INTO burgers (burger_name, devoured) VALUES ("Western BBQ Burger", false);   
INSERT INTO burgers (burger_name, devoured) VALUES ("Baconator", false);   

SELECT * FROM burgers;
UPDATE burgers SET devoured = 1 WHERE id = 1;