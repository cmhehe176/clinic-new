// Định nghĩa mô hình người dùng
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Định nghĩa mô hình bài đăng
const postSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }, // Tham chiếu đến mô hình người dùng
});

const Post = mongoose.model('Post', postSchema);
