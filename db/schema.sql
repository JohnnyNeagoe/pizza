DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;


USE pizza_db;

CREATE TABLE `pizzas` (
id int NOT NULL AUTO_INCREMENT,
pizza_name varchar(255) NOT NULL,
polished boolean,
PRIMARY KEY (id)
);