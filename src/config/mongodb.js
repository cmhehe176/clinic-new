import mongoose from "mongoose";
const User =require('../models/user');
const Doctor =require('../models/doctor');

//connect đến mongodb
let connectDB = async () => {
  try {


    //sadfasdf
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Kết nối database thànhlplplpcông!');
  } catch (error) {
    console.error('Lỗi kết nối database:', error);
  }
};






module.exports = connectDB;