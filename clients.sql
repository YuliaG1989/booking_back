CREATE DATABASE clients;
CREATE DATABASE store;
CREATE DATABASE shoppingcart;

CREATE TABLE store(
    id SERIAL PRIMARY KEY ,
    image varchar(255),
    product VARCHAR (255),
    quantity INT DEFAULT 1,
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
    phone INT ,
    email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO clients (firstname, lastname, pets, phone,  email, password) VALUES ('Yulia', 'G', ARRAY['Kisa'], 2222222, 'yulia.glushenko@gmail', '12345');
INSERT INTO store (product, price, description, image) VALUES ('Cuddle Monkey', 5, 'catnip toy', 'https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/l_sale-badge,fl_relative,w_0.16,g_north_west,e_sharpen/2312278-right-1');
-- DROP DATABASE clients;