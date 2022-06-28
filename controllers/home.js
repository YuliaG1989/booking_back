
const router = require("express").Router();
const authorize = require("../middleware/auth.js");
const postgres = require('../postgres.js');

router.get("/", authorize, async (req, res) => {
  try {
    const user = await postgres.query(
      "SELECT firstname FROM users WHERE id = $1",
      [req.user] 
    ); 
    
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;