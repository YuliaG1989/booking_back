const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = async( req,res,next) =>{
    try{
        const jwToken = req.header('token')

        if(!jwToken) {
            return res.status(403).json("Not Authorize")
        }

        const payload = jw.verify(jwToken, process.env.SECRET_KEY)
        req.user = payload.user
    }catch(err){
        console.error(err.message);
        return res.status(403).json("Not Authorize")
    }
} 