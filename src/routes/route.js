const express = require('express');
const router = express.Router();


const bookController = require("../controllers/bookcontroller.js")
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController.js")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", 
// UserController.createUser  
// )

// router.get("/getUsersData", 
// UserController.getUsersData
// )






// book entry
router.post("/create-a-new-book",
bookController.bookEntry
)

router.get("/get-all-book-list",
bookController.allBookData
)










module.exports = router;