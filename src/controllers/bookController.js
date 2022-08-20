
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
//--------------------------------------question-1-solution-----------------------------------------------------------------------------------//
const createBook= async function (req, res) {
    let book = req.body
    let author = book.author
    if(!author){
        return res.send({msg: "author is require"})
    }
    let valid = await authorModel.findById(author)
    if(!valid){
        return res.send({msg: "author is not present"})
    }
    let publisher = book.publisher
    if(!publisher){
        return res.send({msg: "publisher is require"})
    }
    let valid2 = await publisherModel.findById(publisher)
    if(!valid2){
        return res.send({msg: "publisher is not present"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
//----------------------------------------Question-4-solution--------------------------------------------------------------------------------------//

const getBooksWithAuthorPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})
}
//--------------------------------------------Question-5-solution-------------------------------------------------------------------------------------//
const updateCover = async function (req, res){
    let book2 = await publisherModel.find({ name :{$in: ['Penguin','HarperCollins']}})
    let a = book2.map(x => x._id)     
    let requireBook = await bookModel.updateMany({publisher:{$in: a}}, {$set: {isHardCover: true}})

    res.send({msg: requireBook})
}
//-----------------------------------------------Question-6-solution--------------------------------------------------------------------------------//
const updatePrice = async function (req, res){
    let book3 = await authorModel.find({rating: {$gt: 3.5}})
    let b = book3.map(x => x._id)
    let wantedBook = await bookModel.updateMany({author: {$in: b}}, {$inc: {price: 50}})
    console.log(book3)
    res.send({msg: wantedBook})
}


module.exports.updatePrice = updatePrice
module.exports.updateCover= updateCover
module.exports.createBook= createBook
module.exports.getBooksWithAuthorPublisherDetails = getBooksWithAuthorPublisherDetails
