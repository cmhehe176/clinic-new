import mongoose from "mongoose";
const User =require('../models/user')
const Doctor =require('../models/doctor');

//connect đến mongodb
let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Kết nối database thành công!');

//hiển thị các table trong db
    let collections = await                 
      mongoose.connection.db.listCollections().toArray();
      console.log('Các bảng (collection) trong database:');
      collections.forEach(collection => console.log(collection.name));
  } catch (error) {
    console.error('Lỗi kết nối database:', error);
  }
};

module.exports = connectDB;