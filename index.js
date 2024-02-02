const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routes/todoRoute');
const userRouter = require('./src/routes/userRoutes');
// const imageRoutes = require("./src/routes/imageRoute")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', todoRoutes);
app.use("/api/user", userRouter)
// app.use("/api", imageRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
