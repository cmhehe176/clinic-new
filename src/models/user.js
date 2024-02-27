import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

const user = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password123'
});


user.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
});
module.exports = User;