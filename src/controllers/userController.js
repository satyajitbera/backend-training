

const basicCode= async function(req, res) {
   res.send({ msg: "This is coming from controller (handler)"})
    }

const basicCode2= async function(req, res) {
       res.send({ msg: "This is coming from controller (handler)"})
         }
const basicCode3= async function(req, res) {
       res.send({ msg: "This is coming from controller (handler)"})
              }
const basicCode4= async function(req, res) {
       res.send({ msg: "This is coming from controller (handler)"})
                  }
module.exports.basicCode2 = basicCode2

module.exports.basicCode3= basicCode3
module.exports.basicCode4= basicCode4
module.exports.basicCode= basicCode