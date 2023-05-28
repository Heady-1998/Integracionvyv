const ModelVenta = require("../model/model.venta")
class ControllerVenta
{
    static async readControllerVentaEmail(email){
        return await ModelVenta.readModelVentasUsuario(email)
    }
}

module.exports = ControllerVenta