const express = require("express");
const multer = require("multer");
const ImageModel = require("../models/image");

const upload = multer({ dest: "uploads/" });

const imageController = express.Router();

imageController.post("/upload", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;

  try {
    const savedImage = await ImageModel.create({
      name,
      description,
      image: req.file.buffer
});

    res.status(200).json({
      message: "Image uploaded successfully", savedImage}
     );
  } catch (error) {
    res.status(400).json({
      message: error.message
});
  }
});

module.exports = imageController;
