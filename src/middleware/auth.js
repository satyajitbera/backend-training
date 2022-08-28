const jwt = require("jsonwebtoken");
const mid = function(req, res, next){
token = req.headers["x-auth-token"];
  if (!token) {
       return res.send({ status: false, msg: "token must be present" });
  }   
  let decodedToken = jwt.verify(token, "functionup-plutonium-satyajit-bera-very-very-secret-key");
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
  next()
}

module.exports.mid = mid