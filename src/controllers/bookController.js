const bookModel = require("../models/bookentry.js")



const createBookEntry = async function (req,res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg : savedData})
}

const getBookData= async function (req, res) {
    let allBook= await bookModel.find()
    res.send({msg: allBook})
}

module.exports.bookEntry = createBookEntry
module.exports.allBookData = getBookData