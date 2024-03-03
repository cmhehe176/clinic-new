import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
   
  },
  admin:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
  doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  patient:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  },
});
let User = mongoose.model('User', UserSchema);
//khởi tạo 1 object để chuẩn bị lưu vào trong db
let users = [
  {
    name: 'Admin',
    
  },
  {
    name : 'Doctor',
    
  },
  {
    name: 'Patient',
    
  }
]
//tranh tu dong save cua nodemon
let notrepeat = async()=>{
  let check = await User.find({})
  if(check.length === 0){
    //tạo lần lượt các table trong db
      for (let user of users) {
        await  new User(user).save();
      }
  }
} 
notrepeat()
//lấy tất cả danh sách thông tin bác sĩ hiện có 
let getAllDoctor = async()=>{
  let user = await User.find({name:'Doctor'}).populate('doctor')
  console.log(user[0].name)
}
//getAllDoctor()

module.exports = { 
  User,
  
  


}





