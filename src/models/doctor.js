import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  }
});
const Doctor = mongoose.model('Doctor', UserSchema);


module.exports = Doctor;