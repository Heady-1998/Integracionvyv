const connDB = require("../config/conn")
const generador_password = require("../config/generador_password")
class ModelUser
{
    static async loginUserModel(email,password)
    {
        try{
            var conn = await connDB().promise();
            var datos = await conn.query("select * from usuario as U where U.email = '"+email+"' and U.password = MD5('"+password+"')")
            await conn.end()
            return datos[0]
        }catch (e) {
            console.log(e)
            return []
        }
    }

    static async createUserModel(nombres,email,fechaNacimiento,rol,password)
    {
        try{

            var conn = await connDB().promise();
            var datos = await conn.query("insert into usuario(nombres, email,password,fechaNacimiento, fk_rol) " +
                "values ('"+nombres+"','"+email+"',MD5('"+password+"'),'"+fechaNacimiento+"',"+rol+");")
            await conn.end()
            return true
        }catch (e) {
            console.log(e)
            return false
        }
    }



}

module.exports = ModelUser