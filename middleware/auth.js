const jwt = require('jsonwebtoken')
require('dotenv').config()


const  verify = async( req,res,next)=>{
    try{
        const token = req.header('token')

        if(!token) {
            return res.status(403).json("Not Authorize")
        }

        const payload = jwt.verify(token, process.env.SECRET_KEY)
        req.user = payload.user
       next()
    }catch(err){
        console.error(err.message);
        return res.status(403).json("Token is not valid")
    }
} 

module.exports = verify