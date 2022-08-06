const express = require('express');
const abc = require('./intro.js');
const router = express.Router();
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const falana = require("../validator/formatter.js")

router.get('/test-me', function (req, res) {
 
    console.log('My batch is', abc.name)
    abc.func1()
    logger.funny()
    helper.printDate()
    helper.printMonth()
    console.log(helper.getBatchInfo)
    falana.forTrim()
    falana.lowerCase()
    falana.upperCase()
    res.send('This Is my first api')
 
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason