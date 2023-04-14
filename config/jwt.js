require("../config/env")
const jwt = require('jsonwebtoken');
const {JWT_PASS_SECRET} = require("./env");
class Jwt {
    static createJwt(email,nombre)
    {
        try{
            return  jwt.sign({ email: email,nombre:nombre }, JWT_PASS_SECRET);
        }catch (e) {
            console.log(e)
            return null
        }
    }
}

module.exports = Jwt