const connDB = require("../config/conn")
class ModelVenta
{
    static async readModelVentasUsuario(email)
    {
        try{
            var conn = await connDB().promise();
            var datos = await conn.query("select V.idVenta_m,V.fk_email,V.total,convert(V.fechaVenta,char(150)) fechaVenta from venta_m as V where V.fk_email = '"+email+"'")
            await conn.end()
            return datos[0]
        }catch (e) {
            console.log(e)
            return []
        }
    }
}

module.exports = ModelVenta