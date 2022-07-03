const router  = require('express').Router()
const store = require('../store.js');

store.connect(); 

router.get('/', (req, res) => {
    store.query('SELECT * FROM store ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

module.exports = router