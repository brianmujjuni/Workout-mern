require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/workouts/', workoutRoutes)

//CONNECT TO THE DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.SERVER_PORT,()=>{
        console.log('connected to db and Listening on port' , process.env.SERVER_PORT)
    }) 
})
.catch((error) =>{
    console.log(error)
})

