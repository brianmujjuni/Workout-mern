const express = require('express')
const { 
    createworkout,
    getworkouts ,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
    
} = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/',getworkouts)

//get asingle workout
router.get('/:id', getSingleWorkout)

//post or create new workout
router.post('/', createworkout)

//delete a single workout
router.delete('/:id',deleteWorkout)

//update asingle workout
router.patch('/:id',updateWorkout)

module.exports = router