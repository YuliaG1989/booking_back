CREATE DATABASE clients;


CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    pets VARCHAR [],
    email VARCHAR(255),
    phone INT


);