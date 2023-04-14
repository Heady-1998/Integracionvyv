require("./config/port")
const exprss = require('express')
const bodyParser = require('body-parser')
const user = require("./view/user")
const evento = require("./view/evento")
const taller = require("./view/taller")
const app = exprss()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(user)
app.use(evento)
app.use(taller)

app.listen(process.env.PORT,()=>{
    console.log("SERVER LISTEN "+process.env.PORT)
})