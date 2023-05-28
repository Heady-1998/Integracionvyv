const ModelTaller = require("../model/model.taller")
class ControllerTaller
{
    static async readControllerTallerActivos()
    {
        return await ModelTaller.readModelTallerActivos()
    }

    static async readControllerParticipantesTaller()
    {
        return await ModelTaller.readParticipanteTaller()
    }

    static async readControllerTallerInscriptosUsuario(email)
    {
        return await ModelTaller.readTallerInscriptosUsuario(email)
    }

    static async readControllerCarritoTaller(email)
    {
        return await ModelTaller.readCarritoTaller(email)
    }

    static async readControllerDetalleTaller(taller)
    {
        return await ModelTaller.readModelDetalleTaller(taller)
    }

}

module.exports = ControllerTaller