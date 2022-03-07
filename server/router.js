const express = require('express');
const {
  registerUser,
  registerAppointment,
  getOneAppointment,
  getUsers,
  getOneUser,
  modifyAppointment,
  deleteAppointment,
} = require('./controllers/controller');

const router = express.Router();

router.post('/register', registerUser);
router.post('/newappointment', registerAppointment);
router.get('/appointments/:userEmail', getOneAppointment);
router.put('/appointments/:userEmail', modifyAppointment);
router.delete('/appointments/:userEmail', deleteAppointment);
router.get('/users', getUsers);
router.get('/users/:userEmail', getOneUser);
module.exports = router;
