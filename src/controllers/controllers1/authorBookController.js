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
    let value = arr[0]
    let d = value.author_id
    let data  = await bookModel.find({author_id : d}).select({bookName: 1, _id:0})
    res.send({msg: data})
}




module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.bhagatBook=bhagatBook








