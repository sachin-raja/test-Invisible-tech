// importing axios library to make HTTP requests
const axios = require('axios');

// returns the response of the weather API
const getWeather = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=7bd714b8398802fa98d6301bc01ea6cd&units=metric`);
    return resp.data.main.temp;
}

//exporting module so that we use this functionality with other 
module.exports = {
    getWeather
}