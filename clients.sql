CREATE DATABASE clients;


CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    pets VARCHAR [],
    phone INT,
    email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO clients (firstname, lastname, pets, phone,  email, password) VALUES ('Yulia', 'G', ARRAY['Kisa'], 2222222, 'mail@email', 'abvgd');

DROP DATABASE clients;