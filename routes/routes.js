const express = require('express');
const router = express.Router();


const userControllers = require('../Controllers/userController');

const patientControllers = require('../Controllers/patientControllers');

const availController = require('../Controllers/availabilityController')

const scheduleController = require('../Controllers/scheduleController')


// Users Controllers
router.post('/add-user', userControllers.addUser);
router.get('/users', userControllers.getAllUsers);

// Patients controllers
router.post('/add-patient', patientControllers.addPatient);

// Availability controllers
router.post('/add-availability', availController.addAvailability)

// Schedules controllers
router.post('/add-schedule', scheduleController.addSchedule)

router.put('/update-status', scheduleController.changeStatus)


module.exports = router;