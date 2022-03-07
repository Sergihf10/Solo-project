const mongoose = require('./index');

const Schema = mongoose.Schema;



const appointmentSchema = new Schema({
  date: String,
  email: String,
});


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports =  Appointment;