const axis = require('axios');


const getPlaceLatitudeLongitude = async( dir ) => {

    const encodedUlr = encodeURI( dir );
    
    const atInstance = axis.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: {'X-RapidAPI-Key': 'dcdc56b93cmsh9a9dcfcc143f2dep139571jsn0d73aaf852e7'}
      });
    
    const resp = await atInstance.get();

    if (  resp.data.Results.length === 0 ) {
        throw new Error(`There is no region such as: ${ dir }. Please try a different region`);
    }

    const data = resp.data.Results[0];
    const address = data.name; 
    const lat = data.lat; 
    const lng = data.lon; 
    
    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatitudeLongitude
}

