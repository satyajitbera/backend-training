
const productModel = require("../models/productModel.js")

const createProduct= async function (req, res) {
    let data= req.body
    console.log(data)

    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}


module.exports.createProduct= createProduct
