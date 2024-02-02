// models/image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
  // Add any other relevant fields
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
