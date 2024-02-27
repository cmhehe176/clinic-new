import mongoose from 'mongoose';
import Sequence from 'mongoose-sequence'
let seq = new Sequence('doctor_id', mongoose.connection);
    seq.create({})
let DoctorSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  }
});
DoctorSchema.plugin(seq.plugin,{
    inc_field: '_id',
})
let Doctor = mongoose.model('Doctor', UserSchema);


module.exports = Doctor;