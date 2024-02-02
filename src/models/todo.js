// models/todoModel.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  todoMessage: String,
  imageUrl: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
