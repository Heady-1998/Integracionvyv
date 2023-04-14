const ControllerUser = require("../controller/controller.user")
const express = require("express");
const app = express()


app.post("/login",async function (req,res)
{
    var datos = await ControllerUser.loginUserController(req.body.email,req.body.password)

    if(datos!=null){
        res.status(200).json({
            token:datos
        })
    }else{
        res.status(400).json({
            token:null
        })
    }
})

app.post("/createUser",async function (req,res)
{
    var datos = await ControllerUser.createUserController(req.body.nombres,req.body.email,req.body.fechaNacimiento,req.body.rol)

    if(datos){

        res.status(200).json({
            msm: 'USUARIO CREADO CON EXITO'
        })
    }else{
        res.status(400).json({
            msm: 'NO SE PUEDO CREAR EL USUARIO'
        })
    }
})

module.exports = app