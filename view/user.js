const ControllerUser = require("../controller/controller.user")
const express = require("express");
const app = express()


app.post("/login",async function (req,res)
{
    try{
        var datos = await ControllerUser.loginUserController(req.body.email,req.body.password)

        if(datos!=null){
            res.status(200).json({
                login:'ok'
            })
        }else{
            res.status(200).json({
                login: 'no ok'
            })
        }
    }catch (e) {
        res.status(200).json({
            login: e.toString()
        })
    }
})

app.post("/createUser",async function (req,res)
{
    try {
        var datos = await ControllerUser.createUserController(req.body.nombres,req.body.email,req.body.fechaNacimiento,req.body.rol)

        if(datos){

            res.status(200).json({
                msm: 'USUARIO CREADO CON EXITO'
            })
        }else{
            res.status(200).json({
                msm: 'NO SE PUEDO CREAR EL USUARIO'
            })
        }
    }catch (e) {
        res.status(200).json({
            msm: e.toString()
        })
    }
})

module.exports = app