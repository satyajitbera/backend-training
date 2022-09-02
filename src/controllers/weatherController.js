let axios = require("axios")

const getWeatherLandan = async function (req, res) {
    try {
        let city = req.query.q
        let key = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        console.log(result)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
const getMultiWeather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        obj1 = []
        for (i = 0; i < cities.length; i++) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1d2a498518c9734fe283b9b7cd119f8d`
            }
            let result = await axios(options)
            let temparature = result.data.main.temp
            let obj = { city: cities[i], temp: temparature } 
            obj1.push(obj)
        }
        var respond = obj1.sort(function (a,b) {return a.temp - b.temp})//((a, b) => b.temp - a.temp)
        console.log(respond);

        res.status(200).send({ msg: respond })
    }
   
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

module.exports.getMultiWeather = getMultiWeather
module.exports.getWeather = getWeatherLandan
