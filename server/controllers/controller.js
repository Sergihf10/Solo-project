const User = require('../models/model');
const Appointment = require('../models/AppointmentModel');

const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser).status(201);
  } catch (e) {
    console.log(e);
    res.send(400);
    res.end();
  }
};

const registerAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    res.send(newAppointment).status(201);
  } catch (e) {
    console.log(e);
    res.send(400);
    res.end();
  }
};

const getOneAppointment = async (req, res) => {
  try {
    const email = req.params.userEmail;
    const oneAppointment = await Appointment.find({ email: email });
    res.send(oneAppointment).status(201);
  } catch (e) {
    console.log(e);
    res.send(400).end();
  }
};

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers).status(201);
  } catch (e) {
    console.log(e);
    res.send(400).end();
  }
};

const getOneUser = async (req, res) => {
  try {
    const email = req.params.userEmail;
    const oneUser = await User.find({ email: email });
    res.send(oneUser).status(201);
  } catch (e) {
    console.log(e);
    res.send(400).end();
  }
};

const modifyAppointment = async (req, res) => {
  try {
    const oneAppointment = await Appointment.findByIdAndUpdate(req.body.id, {
      date: req.body.date,
      email: req.body.email,
    });
    res.send(oneAppointment).status(201);
  } catch (e) {
    console.log(e);
    res.send(400).end();
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.body.id);
    res.send(deletedAppointment).status(201);
  } catch (e) {
    console.log(e);
    res.send(400).end();
  }
};

module.exports = {
  registerUser,
  registerAppointment,
  getOneAppointment,
  getUsers,
  getOneUser,
  modifyAppointment,
  deleteAppointment,
};
