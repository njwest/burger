CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id int AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT '0',
  date TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

