const ControllerTaller = require("../controller/controller.taller")
const express = require("express");
const {ensureToken} = require("../config/authenticate");
const app = express()

app.get("/tallerAllActivos",async function (req, res)
{
    try {
        var datos = await ControllerTaller.readControllerTallerActivos()

        res.status(200).json({
            status_code: datos.length > 0 ? 200 : 300,
            msm : datos.length > 0 ? 'TALLERES DISPONIBLES' : 'NO EXISTEN TALLERES DISPONIBLES',
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

app.post("/tallerAllInscriptoUsuario",ensureToken,async function (req, res)
{
    console.log(req.body)


    try {
        var datos = await ControllerTaller.readControllerTallerInscriptosUsuario(req.body.email)

        res.status(200).json({
            status_code: datos.length > 0 ? 200 : 300,
            msm : datos.length > 0 ? 'TALLERES DISPONIBLES' : 'NO EXISTEN TALLERES DISPONIBLES',
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

app.post("/carritoTaller",ensureToken,async function (req, res)
{
    console.log(req.body)


    try {
        var datos = await ControllerTaller.readControllerCarritoTaller(req.body.email)

        res.status(200).json({
            status_code: datos.length > 0 ? 200 : 300,
            msm : datos.length > 0 ? 'TALLERES DISPONIBLES' : 'NO EXISTEN TALLERES DISPONIBLES',
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