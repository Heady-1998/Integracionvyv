const ModelUser = require("../model/model.user")
const Jwt = require("../config/jwt")
const {sendEmailPassword} = require("../config/email");
const generador_password = require("../config/generador_password");
class ControllerUser
{
    static async loginUserController(email,password)
    {
        var dato = await ModelUser.loginUserModel(email,password)

         if(dato.length > 0){
             return Jwt.createJwt(dato[0].email,dato[0].nombres)
         }else{
             return null
         }

    }

    static async createUserController(nombres,email,fechaNacimiento,rol)
    {
        var password = generador_password()
        try {
            //await sendEmailPassword(nombres,email,password)
        }catch (e) {
            console.log(e)
        }
        return  await ModelUser.createUserModel(nombres,email,fechaNacimiento,rol,password)
    }

}

module.exports = ControllerUser