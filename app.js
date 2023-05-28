require("./config/port")
const express = require('express')
const bodyParser = require('body-parser')
const user = require("./view/user")
const evento = require("./view/evento")
const taller = require("./view/taller")
const venta = require("./view/venta")
const app = express()
const cors = require('cors')


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(user)
app.use(evento)
app.use(taller)
app.use(venta)

app.listen(process.env.PORT,()=>{
    console.log("SERVER LISTEN "+process.env.PORT)
})