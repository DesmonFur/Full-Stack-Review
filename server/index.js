const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env 

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

massive(CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log( `'DINGLEBERRY CLYDI RUNNNI ${SERVER_PORT} FLIES`))
})

app.post('/auth/register' ,authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)
