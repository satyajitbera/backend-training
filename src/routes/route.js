const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})




let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
router.post('/players', function (req, res) {
    
   const newPlayer = req.body
   for(let i = 0; i<players.length; i++){
   let player = players[i]
   if(newPlayer.name == player.name)
   return res.send("Duplicate Entry")
   }
   players.push(newPlayer)


    
    res.send(  { data: players , status: true }  )
})


//query params     /get-query-1?mycoolvar=something&xyz=functionup
router.get("/get-query-1", function(req,res){
let data = req.query
let var1 = data.mycoolvar
let var2= data.xyz
res.send({data: var1, dat: var2, status: true})
console.log(data.mycoolvar)
})

router.get("/get-query-2", function(req,res){
let data = req.query.input
console.log(data)
let myArr = [25,10,40,36,7,78,295,30,15,45,32,20]
//const finalArr = myArr.filter(x => x > data)
let finalArr = []
for(i=0; i<myArr.length; i++){
if(myArr[i] > data)
finalArr.push(myArr[i])
}
res.send({ data: finalArr})
})
// finding 18+ votter
let mylist = [
    {
        "name": "satyajit",
        "age": 21,
        "votingStatus": "false"
    },
    {
        "name": "soumyakanti",
        "age": 17,
        "votingStatus": "false"
    },{
        "name": "satish",
        "age": 18,
        "votingStatus": "false"
    },{
        "name": "animesh",
        "age": 25,
        "votingStatus": "false"
    },

]
router.get("/votter", function(req,res){
    let finalArr = []
    let votingAge = req.query.votingAge
    for (i=0; i< mylist.length;i++){
        if(mylist[i].age >= votingAge){
        mylist[i].votingStatus = "true"
        finalArr.push(mylist[i])
        }
       
    }
    console.log(finalArr)
    res.send({data: finalArr})
})






module.exports = router;