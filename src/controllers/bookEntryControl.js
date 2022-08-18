const BookModel= require("../models/bookcreate.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({ bookName: 1, authorName: 1, _id:0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let data = req.query.year
    console.log(data)
    let allBooks= await BookModel.find({ year: { $eq:  data }  }).select({ bookName: 1, _id:0})
    console.log(allBooks)
    res.send({msg: allBooks})
}
const getParticularBooks= async function (req, res) {
    let obj = req.body
    let key = Object.keys(obj)[0]
    let value = obj[key]
    let allBooks= await BookModel.find({[key]:value})
    res.send({msg: allBooks})
}
	
const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({"price.indianPrice": {$in : ["100INR", "200INR", "500INR"]}})
    //$or : [{"price.indianPrice":"100INR"},{"price.indianPrice":"200INR"},{"price.indianPrice":"500INR"}]
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or: [ {stockAvailable : true } , { totalPages: { $gt:  500 } }]}).select({ bookName: 1, _id:0})
    res.send({msg: allBooks})
}

module.exports.getRandomBooks = getRandomBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getParticularBooks=getParticularBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.bookList= bookList
module.exports.createBook= createBook

