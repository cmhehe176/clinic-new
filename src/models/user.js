import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
  
  _id: {
    type: Number,
    auto: true, // Tự động tăng ID
  },
});
let User = mongoose.model('User', UserSchema);


module.exports = User;