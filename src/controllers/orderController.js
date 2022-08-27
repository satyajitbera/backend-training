const orderModel  = require("../models/orderModel.js")
const createOrder= async function (req, res) {
let newData1 = await orderModel.create(data)
    res.send({orderPlaced1: newData1})
}

module.exports.createOrder= createOrder

