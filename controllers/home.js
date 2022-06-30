const router = require("express").Router();
const authorization = require("../middleware/auth");
const postgres = require("../postgres");

router.get("/", authorization, async (req, res) => {
  try {
    // res.json(req.user)
    const user = await postgres.query(
      "SELECT * FROM clients WHERE id = $1",
      [req.user] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;