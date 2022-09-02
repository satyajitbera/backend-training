let axios = require("axios")

const getAllMemes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const createMemes = async function (req, res) {
    try {
        let templateId = req.query.template_id
        let textZero = req.query.text0
        let textOne = req.query.text1
        let userName = req.query.username
        let password  = req.query.password
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${templateId}&text0=${textZero}&text1=${textOne}&username=${userName}&password=${password}`
           
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getAllMemes=getAllMemes
module.exports.createMemes=createMemes
