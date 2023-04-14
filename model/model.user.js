const connDB = require("../config/conn")
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
}

module.exports = ModelUser