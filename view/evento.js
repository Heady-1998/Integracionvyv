const { ensureToken } = require("../config/authenticate");
const ControllerEvento = require("../controller/controller.evento")
const express = require("express");
const app = express()

app.get("/eventosAllActivos",async function (req, res)
{
    try {
        var datos = await ControllerEvento.readControllerEventoActivos()

        res.status(200).json({
            status_code: 200,
            msm : datos.length > 0 ? 'EVENTOS DISPONIBLES' : 'NO EXISTEN EVENTOS DISPONIBLES',
            datos : datos
        })
    }catch (e) {
        res.status(200).json({
            status_code: 400,
            msm: e.toString(),
            datos : []
        })
    }
})


app.get("/detalleEvento/:evento",async function (req, res)
{
    try {
        var datos = await ControllerEvento.readControllerDetalleEvento(req.params.evento)

        res.status(200).json({
            status_code: 200,
            msm : datos.length > 0 ? 'EVENTOS DISPONIBLES' : 'NO EXISTEN EVENTOS DISPONIBLES',
            datos : datos
        })
    }catch (e) {
        res.status(200).json({
            status_code: 400,
            msm: e.toString(),
            datos : []
        })
    }
})


app.post("/eventoAllInscriptoUsuario",async function (req, res)
{
  //  console.log(req.body)


    try {
        var datos = await ControllerEvento.readControllerEventosInscriptosUsuario(req.body.email)

        res.status(200).json({
            status_code: 200,
            msm : datos.length > 0 ? 'EVENTOS DISPONIBLES' : 'NO EXISTEN EVENTOS DISPONIBLES',
            datos : datos
        })
    }catch (e) {
        res.status(200).json({
            status_code: 400,
            msm: e.toString(),
            datos : []
        })
    }
})


app.post("/carritoEvento",async function (req, res)
{
    //console.log(req.body)


    try {
        var datos = await ControllerEvento.readControllerCarritoEventos(req.body.email)

        res.status(200).json({
            status_code: 200,
            msm : datos.length > 0 ? 'EVENTOS DISPONIBLES' : 'NO EXISTEN EVENTOS DISPONIBLES',
            datos : datos
        })
    }catch (e) {
        res.status(200).json({
            status_code: 400,
            msm: e.toString(),
            datos : []
        })
    }
})


module.exports = app