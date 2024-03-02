CREATE DATABASE IF NOT EXISTS technator;
USE technator;

CREATE TABLE IF NOT EXISTS characters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)  ENGINE=INNODB;

INSERT INTO characters (name) VALUES 
('Ada Lovelace'),
('Alan Turing'),
('Grace Hopper'),
('Charles Babbage'),
('Tim Berners-Lee'),
('Dennis Ritchie'),
('Ken Thompson'),
('John von Neumann'),
('Steve Wozniak'),
('Bill Gates'),
('Steve Jobs'),
('Linus Torvalds');

CREATE TABLE IF NOT EXISTS facts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL
)  ENGINE=INNODB;

INSERT INTO facts (id, description, type) VALUES
(1, 'was a woman', 'general'),
(2, 'was a British mathematician', 'general'),
(3, 'was an American computer scientist', 'general'),
(4, 'was considered the first computer programmer', 'specific'),
(5, 'developed the concept of the Turing Machine', 'specific'),
(6, 'developed the first compiler for a computer programming language', 'specific'),
(7, 'was a pioneer in computer science', 'general'),
(8, 'was a co-founder of a major tech company', 'general'),
(9, 'was influential in the development of the internet', 'general'),
(10, 'invented a programming language', 'specific'),
(11, 'created significant software', 'specific'),
(12, 'designed influential computer hardware', 'specific');

CREATE TABLE IF NOT EXISTS linkedfacts (
  character_id INT NOT NULL,
  fact_id INT NOT NULL,
  PRIMARY KEY (character_id, fact_id)
);

INSERT INTO linkedfacts (character_id, fact_id) VALUES
(1, 1),
(1, 4),
(1, 7),
(2, 2),
(2, 5),
(2, 8),
(3, 3),
(3, 6),
(3, 9),
(4, 1),
(4, 4),
(4, 7),
(5, 2),
(5, 5),
(5, 8),
(6, 3),
(6, 6),
(6, 9),
(7, 1),
(7, 4),
(7, 7),
(8, 2),
(8, 5),
(8, 8),
(9, 3),
(9, 6),
(9, 9),
(10, 1),
(10, 10),
(10, 7),
(11, 2),
(11, 11),
(11, 8),
(12, 3),
(12, 12),
(12, 9);


