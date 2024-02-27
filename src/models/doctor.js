import mongoose from 'mongoose';

let DoctorSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  }
});
let Doctor = mongoose.model('Doctor', DoctorSchema);


module.exports = Doctor;