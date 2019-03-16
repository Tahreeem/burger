DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `nc5x9ezrcivuo2co`.`burgers` (
  `burger_id` INTEGER AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR(100) NOT NULL,
  `burger_devoured` BOOLEAN DEFAULT false,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`burger_id`),
  UNIQUE INDEX `burger_name_UNIQUE` (`burger_name` ASC)
);