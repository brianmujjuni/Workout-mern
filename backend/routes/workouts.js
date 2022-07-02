const express = require('express')
const Workout = require('../models/WorkoutModel')
const router = express.Router()

//get all workouts
router.get('/',(req,res)=>{
    res.json({msg: 'get all workouts'})
})

//get asingle workout
router.get('/:id',(req, res)=>{
    res.json({msg: 'getting asingle workout'})
})

//post or create new workout
router.post('/', async(req, res)=>{
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({messageError: error.message})
    }

   
})

//delete a single workout
router.delete('/:id',(req,res)=>{
    res.json({msg:'deleting  workout'})
})

//update asingle workout
router.patch('/:id',(req,res)=>{
    res.json({msg:'update asingle workout'})
})

module.exports = router