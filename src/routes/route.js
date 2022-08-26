const express = require('express');
const router = express.Router();

const productController = require("../controllers/productController.js")
const newUserController = require("../controllers/newUserController.js")
const orderController = require("../controllers/orderController.js")

router.post("/createProduct", productController.createProduct)
router.post("/newcreateUser", newUserController.mid2, newUserController.createUser)
router.post("/createOrder", orderController.mid2, orderController.mid3, orderController.createOrder)
module.exports = router;