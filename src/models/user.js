import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
  roleID:{
    type:Number,
    require:true
  }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;