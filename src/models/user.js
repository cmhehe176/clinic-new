import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
});
let User = mongoose.model('User', UserSchema);
//khởi tạo 1 object để chuẩn bị lưu vào trong db
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
//tạo lần lượt các table trong db
for (let user of users) {
  new User(user).save();
}
module.exports = User;