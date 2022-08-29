const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth.js")



router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)
router.get("/users/:userId", middleware.authenticate,middleware.authorise,userController.getUserData) //to get user Details
router.put("/users/:userId", middleware.authenticate,middleware.authorise, userController.updateUser) // to update user Details
router.delete("/users/:userId", middleware.authenticate,middleware.authorise, userController.deleteUser) // to delets user details(mark as true)

module.exports = router;