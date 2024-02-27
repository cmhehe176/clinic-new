import mongoose from 'mongoose';
import mongodb from './config/mongodb'

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
});
let User = mongoose.model('User', UserSchema);
let users = [
  {
    name: 'Admin'
  },
  {
    name : 'Doctor'
  },
  {
    name: 'Patient'
  }
]
let user
for (user of users) {
  new User(user).save();
}
console.log(user)
module.exports = User;