import mongoose from 'mongoose';
// thằng con thì phải thêm thằng cha
let SpecializationSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  description:{
    type:String,
    required:true
  },
});
let Specialization = mongoose.model('Specialization', SpecializationSchema);


module.exports = Specialization;