const express = require('express');
const router = express.Router();


const bookAuthor = require("../controllers/controllers1/authorBookController.js")
router.post("/createAuthor", bookAuthor.createAuthor)
router.post("/createBook", bookAuthor.createBook)
router.get("/bhagatBook", bookAuthor.bhagatBook)








// const Book= require("../controllers/bookEntryControl.js")
// router.post("/createBook", Book.createBook)
// router.get("/bookList", Book.bookList)
// router.post("/getBooksInYear", Book.getBooksInYear)
// router.post("/getParticularBooks",Book.getParticularBooks)
// router.get("/getXINRBooks", Book.getXINRBooks)
// router.get("/getRandomBooks", Book.getRandomBooks)





// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)
// router.post("/createBook", BookController.createBook  )
// router.get("/getBooksData", BookController.getBooksData)







module.exports = router;