DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points INT NULL,
  attitude VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO actors (name, coolness_points, attitude)
VALUES  ("Vasya", 100, "man"),
        ("Petya", 325, "bad"),
        ("Kolya", 26, "noob"),
        ("Serega", 424, "profesor"),
        ("Demon", 140, "bist");
        
SELECT * FROM actors;