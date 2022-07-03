CREATE DATABASE clients;
CREATE DATABASE store;
CREATE DATABASE shoppingcart;

CREATE TABLE store(
    id SERIAL PRIMARY KEY ,
    image varchar(255),
    product VARCHAR (255),
    price INT,
    description VARCHAR (255)
    
);

-- CREATE TABLE shoppingcart(
--     id SERIAL PRIMARY KEY,
--     product VARCHAR(255),
--     price VARCHAR(255),
--     description VARCHAR 255,
   
-- );

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
INSERT INTO store (product, price, description, image) VALUES ('Spaces SeaQuins', 15, 'mermaid toy', 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3203330-center-1');
DROP DATABASE clients;