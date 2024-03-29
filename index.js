const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routes/todoRoute');
const userRouter = require('./src/routes/userRoutes');
const uploadRoute = require("./src/routes/uploadRoute");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())

// app.use(multer({dest:"uploads/"}));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);
app.use("/api/user", userRouter)
// app.use("/api", uploadRoute)
app.use("/api/images", uploadRoute)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
