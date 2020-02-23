const express = require('express');
const router = express.Router();
const studentsRoute = require('./students');
const classesRoute = require('./classes');
const enrolledRoute = require('./enrolled');

router.use('/students', studentsRoute);
router.use('/classes', classesRoute);
router.use('/enrolled',enrolledRoute);

module.exports = router;