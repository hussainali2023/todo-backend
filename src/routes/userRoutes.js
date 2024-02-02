const express = require("express");
const { signup, signin, getCurrentUser } = require("../controllers/userController")
const userRouter = express.Router();

userRouter.post("/signup", signup)
userRouter.post("/signin", signin)
userRouter.get("/getUser", getCurrentUser)


module.exports = userRouter;