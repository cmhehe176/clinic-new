import mongoose from 'mongoose';
// thằng con thì phải thêm thằng cha
let DoctorSchema = new mongoose.Schema({
  role:String,
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
    },
    specialization:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Specialization'
    },
});
let Doctor = mongoose.model('Doctor', DoctorSchema);

let doctor = new Doctor({
  role:'Doctor',
  name: 'ndmc',
  email:'ndmc',
  address:'ndmc',
  phone:'01234',
  password:'1234',
  nameuser:'',
})
doctor.save()
module.exports = Doctor;
