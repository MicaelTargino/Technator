# Technator 🧠 

A Akinator-like game based on Computing History Characters 

## Characters in this game

- Ada Lovelace
- Alan Turing
- Grace Hopper
- Charles Babbage
- Tim Berners-Lee
- John von Neumann
- Bill Gates
- Steve Jobs
- Linus Torvalds

## Access the project
This project is not available yet. But soon will be deployed and the URL will be available here.

## Run the project in your own computer

### With Docker 

clone the repo
```bash
git clone https://github.com/MicaelTargino/Technator.git
```

init 
```bash
docker-compose up -d --build
```

### Without Docker 

clone the repo
```bash
git clone https://github.com/MicaelTargino/Technator.git
```

install the dependencies
```bash 
npm install 
```

init prisma 
```bash
npx prisma init
```

install prisma client
```bash
npm install @prisma/client

```

setup a mysql server locally
- [windows](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database#setting-up-mysql-on-windows)
- [Mac](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database#setting-up-mysql-on-macos)
- [linux](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database#setting-up-mysql-on-linux)

add a .env file with the mysql connection string in the root of the project
```env
DATABASE_URL="mysql://<user>:<password>@<host>:<port>/<db name>"
```

run this sql into your mysql 
```sql
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
-- Existing entries for reference
(1, 1), -- Ada Lovelace was a woman
(1, 4), -- Ada Lovelace was considered the first computer programmer
(1, 7), -- Ada Lovelace was a pioneer in computer science
(2, 2), -- Alan Turing was a British mathematician
(2, 5), -- Alan Turing developed the concept of the Turing Machine
(2, 7), -- Alan Turing was a pioneer in computer science
(3, 3), -- Grace Hopper was an American computer scientist
(3, 6), -- Grace Hopper developed the first compiler for a computer programming language
(3, 7), -- Grace Hopper was a pioneer in computer science
(4, 2), -- Charles Babbage was a British mathematician
(4, 7), -- Charles Babbage was a pioneer in computer science
(5, 9), -- Tim Berners-Lee was influential in the development of the internet
(6, 10), -- Dennis Ritchie invented a programming language
(7, 10), -- Ken Thompson invented a programming language
(8, 7), -- John von Neumann was a pioneer in computer science
(9, 12), -- Steve Wozniak designed influential computer hardware
(10, 8), -- Bill Gates was a co-founder of a major tech company
(10, 11), -- Bill Gates created significant software
(11, 8), -- Steve Jobs was a co-founder of a major tech company
(11, 12), -- Steve Jobs designed influential computer hardware
(12, 11), -- Linus Torvalds created significant software

-- Adding Grace Hopper was also a woman
(3, 1), -- Grace Hopper was a woman

-- Adding more people linked to "was an American computer scientist"
(6, 3), -- Dennis Ritchie was an American computer scientist
(7, 3), -- Ken Thompson was an American computer scientist
(9, 3), -- Steve Wozniak was an American computer scientist
(12, 3); -- Linus Torvalds, although Finnish, has made significant contributions to American computer science and has lived and worked in the U.S.

```

pull the db models to the prisma schema 
```bash
npx prisma db pull 
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project running.
