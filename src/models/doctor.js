import mongoose from 'mongoose';

let DoctorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required:true,
  },
  address:{
    type: String,
    required:true
  },
          specialization:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Specialization'
          },
  phone:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true
  },
  nameuser:{
    type:String
  },
          user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
          }
});
let Doctor = mongoose.model('Doctor', DoctorSchema);


module.exports = Doctor;