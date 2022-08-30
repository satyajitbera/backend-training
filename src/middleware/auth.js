const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
  try {
    token = req.headers["x-auth-token"];
    if (!token) {
      return res.status(400).send({ status: false, msg: "token must be present" });
    }
    let decodedToken = jwt.verify(token, "functionup-plutonium-satyajit-bera-very-very-secret-key");
    req.decodedToken = decodedToken
    if (!decodedToken) {
      return res.status(403).send({ status: false, msg: "token is invalid" });
    }
    next()
  }
  catch (err) {
    console.log("this is the error:", err.message)
    res.status(500).send({ msg: "error", error: err.message })
  }
}


const authorise = function (req, res, next) {
  try {
    let userToBeModified = req.params.userId
    let token1 = req.decodedToken
    let userLoggedIn = token1.userId
    if (userToBeModified != userLoggedIn) {
      return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    }
    next()
  }
  catch (err) {
    console.log("this is the error:", err.message)
    res.status(500).send({ msg: "error", error: err.message })
  }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise