CREATE DATABASE ti_pizza;
USE ti_pizza;

CREATE TABLE `orders` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  -- `customer` VARCHAR ( 255 ) NOT NULL,
  `toppings` VARCHAR ( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` )

);