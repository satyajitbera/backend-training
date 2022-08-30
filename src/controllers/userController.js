const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData })
    }
    else {
      res.status(400).send({ msg: "Bad Request" })
    }
  }
  catch (err) {
    console.log("this is the error:", err.message)
    res.status(500).send({ msg: "error", error: err.message })
  }
}

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user){
      return res.status(401).send({ status: false, msg: "username or the password is not corerct" });
    }
    
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "plutonium",
          organisation: "FunctionUp",
        },
        "functionup-plutonium-satyajit-bera-very-very-secret-key"

      )
    
    res.status(200).setHeader("x-auth-token", token);
    res.status(200).send({ status: true, token: token });
  }
  catch (err) {
    console.log("this is the error:", err.message)
    res.status(500).send({ msg: "error", error: err.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("this is the error:", err.message)
    res.status(500).send({ msg: "error", error: err.message })
  }
};


const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true }); //
  res.status(200).send({ status: true, data: updatedUser });
}
catch(err){
  console.log("this is the error:",err.message)
  res.status(500).send({msg:"error", error: err.message})
}
};

const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: false }, { new: true }); //
  res.status(200).send({ status: true, data: updatedUser });
}
catch(err){
  console.log("this is the error:",err.message)
  res.status(500).send({msg:"error", error: err.message})
}
}
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser; 
