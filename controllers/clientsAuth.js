const router  = require('express').Router()
const postgres = require('../postgres.js');

const jwt = require('jsonwebtoken')
const  bcrypt  =  require("bcrypt");




postgres.connect(); 

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});
router.post('/', (req, res) => {
    // const password = req.body.password;
    // const salt = bcrypt.genSalt(10)
    // const bcryptPassword = bcrypt.hash(password, salt );
    postgres.query(`INSERT INTO clients (firstname, lastname, pets, phone, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', ARRAY['${req.body.pets}'], ${req.body.phone}, '${req.body.email}', '${req.body.password}')`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM clients WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE clients SET firstname = '${req.body.firstname}', lastname = '${req.body.lastname}', pets = ARRAY['${req.body.pets}'], , phone = ${req.body.phone}, email = '${req.body.email}',  password='${req.body.password}' WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router