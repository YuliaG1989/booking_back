const express = require('express')
const app = express()
const cors =  require('cors')
const postgres = require('./postgres.js');
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
postgres.connect();

app.get('/', (req, res) => {
    postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

app.post('/', (req, res) => {
    postgres.query(`INSERT INTO clients (firstName, lastName, pets, email, phone) VALUES ('${req.body.firstName}', ${req.body.lastName}, ${req.body.pets}, ${req.body.email}, ${req.body.phone})`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

app.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM clients WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

app.put('/:id', (req, res) => {
    postgres.query(`UPDATE clients SET firstName = '${req.body.firstName}', lastName = ${req.body.age}, pets = ${req.body.pets}, email = ${req.body.email}, phone = ${req.body.phone}  WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});



app.listen(5000, ()=>{
    console.log('listening...')
})