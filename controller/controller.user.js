const ModelUser = require("../model/model.user")
const Jwt = require("../config/jwt")
class ControllerUser
{
    static async loginUserController(email,password)
    {
        var dato = await ModelUser.loginUserModel(email,password)
         if(dato.length > 0){
             return Jwt.createJwt(dato.email,dato.nombres)
         }else{
             return null
         }

    }
}

module.exports = ControllerUser