const publisherModel= require("../models/publisherModel.js")
//-------------------Question-2-solution------------------------------------------------------------------------//
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}


module.exports.createPublisher= createPublisher
