// console.log('Hi')
// const something = require('somelibarary....')
const express = require('express')
const app = express()
require('dotenv').config()

// Lets Define Error Handdling
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(400).send('This is Error Code')
})

// Lest define rout
app.get('/',(req,res)=>{
    res.send(`Everythink is ok`)
})

let port = process.env.PORT
app.listen(port,()=>{
    console.log(`The Server is Working And Port : ${port}`)
})