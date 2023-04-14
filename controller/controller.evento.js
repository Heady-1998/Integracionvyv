const ModelEvento = require("../model/model.evento")
class ControllerEvento
{
    static async readControllerEventoActivos()
    {
        return await ModelEvento.readModelEventoActivos()
    }

    static async readControllerEventosInscriptosUsuario(email)
    {
        return await ModelEvento.readEventosInscriptosUsuario(email)
    }


    static async readControllerCarritoEventos(email)
    {
        return await ModelEvento.readCarritoEvento(email)
    }
}

module.exports = ControllerEvento