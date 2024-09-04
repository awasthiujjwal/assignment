const express = require ('express');
const DatabaseConnection = require('./Database');
const app = express()
const PORT = process.env.PORT || 5000;
const cors = require ('cors')
const Usermodel = require ('./Models/Usermodel')
const Router = require ('./Routes/UserRoutes')
DatabaseConnection()
app.use(cors())
app.use(express.json())
app.get ('/',( req,res)=>{
    res.send('Welcome page')
})
app.use('/users',Router)
app.listen(PORT,()=>{
    console.log (`server is running on port ${PORT}`)
})