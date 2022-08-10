const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students/:name', function (req, res){
    //let students = ['Sabiha', 'Neha', 'Akash']
    let studentName = req.params.name

    res.send(studentName)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    let studentDetails = studentName + " " + studentName
    
    res.send(studentDetails)
})

router.get('/movies/:indexNumber', function(req,res){
    const movies = ['Rang de Basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    if (movieIndex < 0 || movieIndex >= movies.length){
     return res.send("pleach check the value")
    }
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)

})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": 'Incendie'
       }, {
        'id': 3,
        'name': "Rang de Basanti"
       }, {
        "id": 4,
        "name": 'Finding Nemo'
       }]
res.send(films)



})

router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": 'Incendie'
       }, {
        'id': 3,
        'name': "Rang de Basanti"
       }, {
        "id": 4,
        "name": 'Finding Nemo'
       }]

let filmId = req.params.filmId
console.log("received fim Id ", filmId)

for (let i = 0; i<films.length; i++){
    let film = films[i]
    if(film.id == filmId){
        return res.send(film.name)
    }
}
res.send("the file id Doesn't match ")
})





router.get('/sol1', function (req, res) {


    
        let arr= [1,2,3,5,6,7]
      
        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }
      
        let lastDigit= arr.pop()
        let consecutiveSum= lastDigit * (lastDigit+1) / 2
        let missingNumber= consecutiveSum - total
        const miss = missingNumber.toString()
        res.send(  miss )
        
      })


      router.get("/sol2", function (req, res){
        let arr= [33, 34, 35, 37, 38]
        let len= arr.length
      
        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }
      
        let firstDigit= arr[0]  
        let lastDigit= arr.pop()      // n*(n+1)/2
        let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
        let missingNumber= consecutiveSum - total
        const miss = missingNumber.toString()
       
        res.send(miss );
      });
      
     


     










module.exports = router;