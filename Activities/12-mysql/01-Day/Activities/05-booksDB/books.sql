-- Dropping and Creating DataBase
DROP database IF exists sqlPractise;
create database sqlPractise;
-- Using the DataBase
USE sqlPractise;
-- Creating the Table
CREATE TABLE customer (
    CustomerId INTEGER(11) AUTO_INCREMENT NOT NULL,
    CityId INTEGER(11),
    CustomerName VARCHAR(100),
    PRIMARY KEY (CustomerId)
);
CREATE TABLE city (
    CityId INTEGER(11) AUTO_INCREMENT NOT NULL,
    CityName VARCHAR(100),
    PRIMARY KEY (CityId)
);

INSERT INTO customer (CityId, CustomerName) values (1, 'Bob Smith');
INSERT INTO customer (CityId, CustomerName) values (1, 'Sally Smith');
INSERT INTO customer (CityId, CustomerName) values (2, 'Tom Smith');
INSERT INTO customer (CityId, CustomerName) values (NULL, 'Mary Smith');

INSERT INTO city (CityName) values ('New York');
INSERT INTO city (CityName) values ('London');
INSERT INTO city (CityName) values ('Hyderabad');

SELECT * FROM customer;
select * FROM city;

SELECT * FROM customer Inner JOIN city on customer.CityId = city.CityId;
SELECT * FROM customer LEFT JOIN city on customer.CityId = city.CityId;
SELECT * FROM customer Right JOIN city on customer.CityId = city.CityId;
SELECT  cs.*, cy.CityName FROM customer as cs  left JOIN city as cy on cs.CityId = cy.CityId;
SELECT  cs.*, cy.CityName FROM customer as cs  left JOIN city as cy on cs.CityId = cy.CityId where cy.CityName = 'London';