const request = require('request');

const forcast = (location, callback) =>{
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+encodeURIComponent(location)+"&appid=033be0724e90645cf08c7aeafae45ed9&units=metric";

    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect ot weather services',undefined);
        }else if(response.body.cod === "404"){
            callback('The weather location not found..! Please try again',undefined);
        }else{
            const main = response.body.main;
            const weather = response.body.weather[0];
            callback(undefined, {
                'status': weather.main,
                'temp': main.temp,
                'humidity': main.humidity,
                'sea llevel': main.sea_level
            })
        }
        
    })
}

module.exports = forcast;