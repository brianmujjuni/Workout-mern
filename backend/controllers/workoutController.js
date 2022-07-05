const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

//get all workouts
const getworkouts = async(req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout
const getSingleWorkout =async(req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No Such Id Workout'})
    }

    res.status(200).json(workout)

}

//create new workout
const createworkout = async(req,res) => {
    const {title, load, reps} = req.body
    
    //checking for empty fields
    let emptyFields = []
    
    if(!title){
        emptyFields.push('title')
    }
    if(!load){
       emptyFields.push('load') 
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({errror: 'Please Fill in all the fields',emptyFields})
    }


    //add documents to db
    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({messageError: error.message})
    }

}

//delete a workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error: 'No Such workout'})
    }

    res.status(200).json(workout)
}

//update a workout
const updateWorkout =async(req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: 'No Such workout'})
    }

    res.status(200).json(workout)
}

module.exports={
    createworkout,
    getworkouts ,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}