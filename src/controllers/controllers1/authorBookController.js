const authorModel= require("../../models/author.js")
const bookModel = require("../../models/book.js")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const bhagatBook = async function (req, res) {
    let arr = await authorModel.find({author_name : "Chetan Bhagat"}).select({author_id: 1, _id:0})
    console.log(arr)
    let value = arr[0]
    let d = value.author_id
    let data  = await bookModel.find({author_id : d}).select({bookName: 1, _id:0})
    res.send({msg: data})
}

const book1 = async function (req, res)  {
    let data = await bookModel.findOneAndUpdate({bookName: "Two states"}, {$set: {price: 100}}, {new: true}). select({author_id: 1, price:1, _id:0})
    let d1 = data.author_id
    let data1 = await authorModel.find({author_id: d1}).select({author_name:1, _id:0})
    let price = data.price

    res.send({msg:data1, updatedPrice: price  })
}


const book2 = async function (req, res){
    let data3 = await bookModel.find({price: {$gte: 50, $lte: 100}})   

    let a = data3.map(x => x.author_id)
    console.log(a)
    
    let datam = await authorModel.find({author_id:{$in: a}} ).select({author_name: 1, _id:0})
    //console.log(datam)
    res.send({msg: datam})
    
}



module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.bhagatBook=bhagatBook
module.exports.book1 = book1
module.exports.book2 = book2