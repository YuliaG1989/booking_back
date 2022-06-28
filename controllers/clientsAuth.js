const router  = require('express').Router()
const postgres = require('../postgres.js');
const validInfo = require('../middleware/validInfo')
const jwt = require('jsonwebtoken')
const  bcrypt  =  require("bcrypt");
const jwtGenerator = require('../jwtGenerator')
const authorization = require('../middleware/auth.js')


postgres.connect(); 

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

// router.post("/", async (req, res) => {
//     const {firstname, lastname, pets, email, password } = req.body;
  
//     try {
//       const user = await postgres.query("SELECT * FROM clients WHERE email = $1", [
//         email
//       ]);
  
//       if (user.rows.length > 0) {
//         return res.status(401).json("Client already exist!");
//       }
  
//       const salt = await bcrypt.genSalt(10);
//       const bcryptPassword = await bcrypt.hash(password, salt);
  
//       let newUser = await postgres.query(
//         "INSERT INTO clients (firstname, lastname, pets, email, password) VALUES ($1, $2, ARRAY[$3], $4, $5) RETURNING *",
//         [firstname, lastname, pets, email, bcryptPassword]
//       );
  
//     //   const jwtToken = jwtGenerator(newUser.rows[0].id);
  
//       return res.json(newUser.rows[0].id);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server error");
//     }
//   });

router.post('/', validInfo, async (req, res) => {
    const {firstname, lastname, pets, phone, email, password } = req.body;
    const user = await postgres.query("SELECT * FROM clients WHERE email = $1", [
                email
              ]);
          
              if (user.rows.length > 0) {
                return res.status(401).json("Client already exist!");
              }
            
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);
        postgres.query('INSERT INTO clients (firstname, lastname, pets, phone, email, password) VALUES ($1, $2, ARRAY[$3], $4, $5, $6) RETURNING *',
                [firstname, lastname, pets, phone, email, bcryptPassword], (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            const token = jwtGenerator(results.rows.user_id)
            res.json({token})
        });
    })
});

router.post("/login", validInfo, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await postgres.query("SELECT * FROM clients WHERE email = $1", [
        email
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
  console.log(validPassword)
      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      
       const token = jwtGenerator(user.rows.user_id)
       res.json({ token })
   
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM clients WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, pets, phone, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    postgres.query('UPDATE clients SET firstname = $1, lastname = $2, pets = ARRAY[$3], phone = $4, email = $5,  password=$6 WHERE id = $7',
    [firstname, lastname, pets, phone, email, bcryptPassword, id],
    (err, results) => {
    postgres.query('SELECT * FROM clients ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })

})

router.get("/verify", authorization, (req, res) => {
    try {
      res.json(true);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
module.exports = router