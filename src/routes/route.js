const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")



const Book= require("../controllers/bookEntryControl.js")




//router.get("/test-me", function (req, res) {
//    res.send("My first ever api!")
//})
router.post("/createBook", Book.createBook)
router.get("/bookList", Book.bookList)
router.post("/getBooksInYear", Book.getBooksInYear)
router.post("/getParticularBooks",Book.getParticularBooks)
router.get("/getXINRBooks", Book.getXINRBooks)
router.get("/getRandomBooks", Book.getRandomBooks)





// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;