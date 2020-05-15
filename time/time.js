// importing axios library to make HTTP requests
const axios = require('axios');

// returns the response of the timezone API
const getTime = async ( lat, lng ) => {
    const response = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=LSL13GMDF8BS&format=json&by=position&lat=${ lat }&lng=${ lng }`);
    return response.data.formatted;
}

// exporting module so that we use this functionality with other components
module.exports = {
    getTime
}