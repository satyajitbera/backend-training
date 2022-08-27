const newUserModel = require("../models/newUserModel.js")



const createUser= async function (req, res) {
let data= req.body
let savedData= await newUserModel.create(data)
res.send({msg: savedData})
}


module.exports.createUser= createUser