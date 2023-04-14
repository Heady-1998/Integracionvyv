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

module.exports = app