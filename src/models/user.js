import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
});
export let User = mongoose.model('User', UserSchema);
//khởi tạo 1 object để chuẩn bị lưu vào trong db
let users = [
  {
    name: 'Admin',
    admin:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Admin'
    },
  },
  {
    name : 'Doctor',
    doctor:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Doctor'
    },
  },
  {
    name: 'Patient',
    patient:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Patient'
    },
  }
]

//tạo lần lượt các table trong db
for (let user of users) {
  new User(user).save();
}

