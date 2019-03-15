DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  burger_id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  burger_devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (burger_id),
  UNIQUE INDEX `burger_name_UNIQUE` (`burger_name` ASC) VISIBLE
);