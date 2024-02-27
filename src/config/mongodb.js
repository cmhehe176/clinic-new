import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Kết nối database thành công!');
  } catch (error) {
    console.error('Lỗi kết nối database:', error);
  }
};

module.exports = connectDB;