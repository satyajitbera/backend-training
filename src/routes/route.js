const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController = require("../controllers/memeController.js")
const weatherController= require("../controllers/weatherController.js")





router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrict", CowinController.getByDistrict)

router.get("/getAllMemes", memeController.getAllMemes)
router.post("/createMemese", memeController.createMemes)

router.get("/getWeatherLandan", weatherController.getWeather)
router.get("/getMultipleCitiesWeather", weatherController.getMultiWeather)

module.exports = router;