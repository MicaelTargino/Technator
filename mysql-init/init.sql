CREATE DATABASE IF NOT EXISTS technator;
USE technator;

CREATE TABLE IF NOT EXISTS characters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  details VARCHAR(1024) DEFAULT NULL
)  ENGINE=INNODB;

INSERT INTO characters (name, details) VALUES 
('Ada Lovelace', "Ada Lovelace was an English mathematician and writer. She is chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. Lovelace's notes on the engine include what is considered the first algorithm intended to be carried out by a machine, making her one of the first computer programmers. She foresaw the potential of computers to go beyond mere calculation, envisioning their application in fields such as music and art. Lovelace is often celebrated as a pioneer in computing and a visionary in the field of technology."),
('Alan Turing', "Alan Turing was a British mathematician, logician, cryptanalyst, and computer scientist. He is widely considered the father of theoretical computer science and artificial intelligence. During World War II, Turing played a pivotal role at Bletchley Park, where he devised techniques for breaking German ciphers, most notably the Enigma machine. His work significantly contributed to the Allied victory. After the war, Turing proposed the Turing Test as a criterion for machine intelligence. He also developed the concept of the Turing machine, a fundamental model of computation. Despite his groundbreaking contributions, Turing faced persecution for his homosexuality, which was then illegal in the UK. He died on June 7, 1954, under tragic circumstances. His legacy endures in the fields of computer science, cryptography, and artificial intelligence."),
('Grace Hopper', "Grace Hopper was an American computer scientist and United States Navy rear admiral. She was a pioneer in developing computer technology, particularly known for her work on the Harvard Mark I computer and for developing the first compiler, a program that translates written instructions into code that computers can read directly. Hopper's work led to the creation of COBOL, one of the first high-level programming languages. She was known for her visionary ideas and innovative thinking, famously coining the term 'debugging' after removing a moth from a computer relay. Hopper's contributions to computer science have had a lasting impact, and she is celebrated as one of the field's most influential figures."),
('Charles Babbage', "Charles Babbage was an English polymath, inventor, and mechanical engineer who is best known for conceptualizing the first automatic mechanical computer, which he called the Analytical Engine. His design included many features found in modern computers, such as a control unit and memory. Babbage also invented the Difference Engine, an earlier calculating machine designed to tabulate polynomial functions. Although neither of these machines were completed in his lifetime, Babbage's ideas laid the groundwork for future developments in computing. His contributions have earned him the title of 'father of the computer.'"),
('Tim Berners-Lee', "Tim Berners-Lee is a British computer scientist best known as the inventor of the World Wide Web. In 1989, while working at CERN, he proposed an information management system that would use hypertext to enable researchers to share and access information across a network. This idea led to the development of the first web browser and web server, and the creation of the first website in 1991. Berners-Lee's innovations revolutionized how information is shared and accessed globally, making the internet accessible to millions of people. He continues to advocate for the open web and is a prominent figure in discussions about internet privacy and freedom."),
('Dennis Ritchie', "Dennis Ritchie was an American computer scientist renowned for his pivotal contributions to the development of the C programming language and the Unix operating system. While working at Bell Labs in the 1970s, Ritchie, along with his colleague Ken Thompson, created Unix, a powerful, multi-tasking operating system that has influenced many other operating systems, including Linux and macOS. His development of the C programming language revolutionized software development by providing a high-level language with the efficiency of assembly language, and it remains widely used today. Ritchie's work laid the foundations for much of modern computing, and he is celebrated as one of the most influential figures in the field."),
('Ken Thompson', "Ken Thompson is an American computer scientist known for his significant contributions to the development of computer science, particularly in creating the Unix operating system. Alongside Dennis Ritchie at Bell Labs in the late 1960s and early 1970s, Thompson co-designed and implemented Unix, which has become the foundation for many modern operating systems. He also created the B programming language, a precursor to Ritchie's C programming language. In addition to his work on Unix, Thompson made notable contributions to computer science with the development of the Plan 9 operating system and his work on the Go programming language at Google. His innovations have had a lasting impact on software development and computer systems."),
('John von Neumann', "John von Neumann was a Hungarian-American mathematician, physicist, computer scientist, and polymath. He made foundational contributions to many fields, including quantum mechanics, functional analysis, set theory, economics, and statistics. In the realm of computer science, von Neumann is best known for his conceptualization of the stored-program architecture, which underpins most modern computers. This architecture, often referred to as the von Neumann architecture, describes a system where the data and programs are stored in the same memory space. He was also a key figure in the development of the EDVAC, one of the earliest electronic computers, and made significant contributions to game theory and the Manhattan Project. Von Neumann's interdisciplinary work has had a profound and lasting influence across multiple scientific and mathematical domains."),
('Steve Wozniak', "Steve Wozniak, often referred to as 'Woz', is an American electronics engineer, programmer, philanthropist, and technology entrepreneur. He co-founded Apple Inc. with Steve Jobs and Ronald Wayne in 1976. Wozniak is best known for designing the Apple I and Apple II computers, which were among the first highly successful personal computers. His work on the Apple II, with its innovative design and user-friendly features, played a crucial role in launching the personal computing revolution. Wozniak's contributions to technology and his inventive spirit have made him a key figure in the history of computing. Beyond his work at Apple, he has been involved in various philanthropic efforts and continues to advocate for education and technology innovation."),
('Bill Gates', "Bill Gates is an American business magnate, software developer, philanthropist, and co-founder of Microsoft Corporation, one of the world's largest and most influential technology companies. Along with Paul Allen, Gates founded Microsoft in 1975, and he played a key role in the development and commercialization of the personal computer. Under his leadership, Microsoft introduced a range of groundbreaking software products, including the MS-DOS operating system and the Windows operating system, which became the dominant platform for personal computers worldwide."),
('Steve Jobs', "Steve Jobs was an American entrepreneur, industrial designer, and business magnate best known as the co-founder, chairman, and CEO of Apple Inc. Alongside Steve Wozniak and Ronald Wayne, he founded Apple in 1976, playing a pivotal role in the creation and popularization of personal computers with the Apple I and Apple II. Jobs' vision and relentless pursuit of innovation led to the development of groundbreaking products such as the Macintosh, iPod, iPhone, and iPad, which revolutionized the technology industry and consumer electronics."),
('Linus Torvalds', "Linus Torvalds is a Finnish-American software engineer best known for creating the Linux operating system kernel. In 1991, while a student at the University of Helsinki, Torvalds began developing Linux as a free and open-source alternative to the Unix operating system. The Linux kernel, combined with other free and open-source software, became the basis for various Linux distributions, which are widely used in servers, desktops, and embedded systems around the world.");

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

