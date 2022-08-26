const newUserModel = require("../models/newUserModel.js")

const mid2= function ( req, res, next) {
    let booleanAnswer = req.headers.isfreeappuser
    console.log(booleanAnswer)
    if(!booleanAnswer){
        return res.send({msg:"the request is missing a mandatory header"})
    }
      req.body["isFreeAppUser"]= booleanAnswer
      console.log(req.body)
    next()
}

const createUser= async function (req, res) {
let data= req.body
let savedData= await newUserModel.create(data)
res.send({msg: savedData})
}

module.exports.mid2 = mid2
module.exports.createUser= createUser
