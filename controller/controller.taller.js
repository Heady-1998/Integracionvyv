const ModelTaller = require("../model/model.taller")
class ControllerTaller
{
    static async readControllerTallerActivos()
    {
        return await ModelTaller.readModelTallerActivos()
    }
    static async readControllerTallerInscriptosUsuario(email)
    {
        return await ModelTaller.readTallerInscriptosUsuario(email)
    }

    static async readControllerCarritoTaller(email)
    {
        return await ModelTaller.readCarritoTaller(email)
    }

}

module.exports = ControllerTaller