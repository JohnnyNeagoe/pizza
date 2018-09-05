DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE `pizzas` (
id int NOT NULL AUTO_INCREMENT,
pizza_name varchar(1000) NOT NULL,
polished BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);

SELECT * FROM pizzas;