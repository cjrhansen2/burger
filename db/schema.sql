/*Create the database and use it*/
USE ixo5himha8n9q50a;
/*Then make a table with the required*/
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);