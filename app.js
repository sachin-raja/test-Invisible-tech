
const argv = require('./config/yargs').argv;
const place = require('./location/location');
const weather = require('./weather/weather');
const timestamp = require('./time/time');

let getInfo = async(address) => {

    try {
        let coors = await place.getPlaceLatitudeLongitude(address);  
        let temp = await weather.getWeather(coors.lat, coors.lng);
        let time = await timestamp.getTime(coors.lat, coors.lng);
        return `The Weather in ${coors.address} is ${temp}°C at ${time.split(" ")[1]} on ${time.split(" ")[0]}. \nHave a good day!!`;

    } catch (e) {
        return `No Weather information for :  ${address}. Please try again!`
    }
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err));