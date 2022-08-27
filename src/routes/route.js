const express = require('express');
const router = express.Router();
const commonmw=require("../middlewares/commonMiddlewares.js")
const productController = require("../controllers/productController.js")
const newUserController = require("../controllers/newUserController.js")
const orderController = require("../controllers/orderController.js")

router.post("/createProduct", productController.createProduct)
router.post("/newcreateUser", commonmw.mid2, newUserController.createUser)
router.post("/createOrder",commonmw.mid2,commonmw.mid3,commonmw.mid4, orderController.createOrder)
module.exports = router;