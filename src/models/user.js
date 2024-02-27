import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
  
  _id: {
    type: Number,
    auto: true, // Tự động tăng ID
  },
});
const User = mongoose.model('User', UserSchema);


module.exports = User;