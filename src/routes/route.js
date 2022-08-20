const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController.js")

router.post("/createPublisher", publisherController.createPublisher)
router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBook", bookController.createBook  )
router.get("/getBooksWithAuthorPublisherDetails", bookController.getBooksWithAuthorPublisherDetails)
router.put("/updateCover", bookController.updateCover)
router.put("/updatePrice", bookController.updatePrice)
module.exports = router;