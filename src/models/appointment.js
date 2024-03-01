import mongoose from 'mongoose';
// thằng con thì phải thêm thằng cha
let AppointmentSchema = new mongoose.Schema({
  patient:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
  doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  description:{
    type:String,
    required:true
  },
});
let Appointment = mongoose.model('Appointment', AppointmentSchema);


module.exports = Appointment;