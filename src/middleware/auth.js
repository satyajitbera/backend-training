const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next){
token = req.headers["x-auth-token"];
  if (!token) {
       return res.send({ status: false, msg: "token must be present" });
  }   
  let decodedToken = jwt.verify(token, "functionup-plutonium-satyajit-bera-very-very-secret-key");
   req.decodedToken=decodedToken
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
  next()
}
 
const authorise = function(req, res, next){
  let userToBeModified = req.params.userId
    let token1= req.decodedToken
   let userLoggedIn = token1.userId
    if(userToBeModified != userLoggedIn) {
    return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    } 
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise