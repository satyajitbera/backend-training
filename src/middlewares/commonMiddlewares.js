const productModel=require("../models/productModel.js")
const newUserModel=require("../models/newUserModel.js")
const moment = require("moment")
const mid2= function ( req, res, next) {
    let booleanAnswer = req.headers.isfreeappuser
    if(!booleanAnswer){
        return res.send({msg:"the request is missing a mandatory header"})
    }
      req.body["isFreeAppUser"]= booleanAnswer
    next()
}
const mid3 = async function(req, res, next){
    
        let order = req.body
        let user = order.userId
        if(!user){
            return res.send({msg: "user is require"})
        }
        let valid = await newUserModel.findById(user)
        if(!valid){
            return res.send({msg: "userid is not present"})
        }
        let product = order.productId
        if(!product){
            return res.send({msg: "product is require"})
        }
        let valid2 = await productModel.findById(product)
        if(!valid2){
            return res.send({msg: "productid is not present"})
        }
        next()
}
const mid4=async function(req,res,next){
    let product = await productModel.findById(req.body.productId)
let user = await newUserModel.findById(req.body.userId)
data = req.body
if(data.isFreeAppUser === "false"){
    let productPrice = product.price
    let userBalance = user.balance
    if(userBalance>= productPrice){
        let userNewBalance = userBalance - productPrice
        await newUserModel.findOneAndUpdate({_id: data.userId},{$set: {balance: userNewBalance}})
        let today = moment().format('YYYY-MM-DD')
        data.amount = productPrice
        data.isFreeAppUser= false
        data.Date= today
       }
    else{
        return res.send({msg: "users balance is low, cant order"})
    }
}
else if(data.isFreeAppUser === "true"){
    let today1 = moment().format('YYYY-MM-DD')
    data.amount = 0
    data.isFreeAppUser= true
    data.Date=today1


}
next()

}
module.exports.mid2=mid2
module.exports.mid3=mid3
module.exports.mid4=mid4