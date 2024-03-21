import mongoose from 'mongoose';
// thằng con thì phải thêm thằng cha
let PatientSchema = new mongoose.Schema({
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
  gender:{
    type:String,
    required: true
  },
  birthday:{
    type:String,
    required:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});
let Patient = mongoose.model('Patient', PatientSchema);


module.exports = Patient;
