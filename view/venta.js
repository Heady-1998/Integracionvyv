const { ensureToken } = require("../config/authenticate");
const ControllerVenta = require("../controller/controller.venta")
const express = require("express");
const app = express()

app.post("/ventasEmail",ensureToken,async function (req, res)
{
    try {
        var datos = await ControllerVenta.readControllerVentaEmail(req.body.email)

        res.status(200).json({
            status_code: datos.length > 0 ? 200 : 300,
            msm : datos.length > 0 ? 'VENTAS DISPONIBLES' : 'NO EXISTEN VENTAS DISPONIBLES',
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