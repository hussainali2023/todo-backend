const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: Buffer
});

const ImageModel = mongoose.model("Image", ImageSchema);

module.exports = ImageModel;
