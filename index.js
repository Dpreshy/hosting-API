require('dotenv')

const express = require ('express')
const res = require('express/lib/response')
const port = process.env.PORT || 2022
const app = express()
// const mongoose = require('mongoose')

 app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Api is ready.....')
})


app.listen(port, ()=>{
    console.log('listening to port' + port)
})