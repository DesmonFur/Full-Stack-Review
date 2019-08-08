const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()
const session = require('express-session')
app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env 
massive(CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log( `'DINGLEBERRY CLYDI RUNNNI ${SERVER_PORT} FLIES`))
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))
