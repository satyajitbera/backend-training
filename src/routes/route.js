const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth.js")



router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)
router.get("/users/:userId", middleware.mid, userController.getUserData) //to get user Details
router.put("/users/:userId", middleware.mid, userController.updateUser) // to update user Details
router.delete("/users/:userId", middleware.mid, userController.deleteUser) // to delets user details(mark as true)

module.exports = router;