require("../config/env")
const jwt = require('jsonwebtoken');
const {JWT_PASS_SECRET} = require("./env");
class Jwt {
    static createJwt(email,nombre)
    {
        try{
            var token = jwt.sign({ email: email,nombre:nombre }, JWT_PASS_SECRET,{expiresIn:'24h'});
            return token
        }catch (e) {
            console.log(e)
            return null
        }
    }
}

module.exports = Jwt