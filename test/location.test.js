// Importing chai for validation 
const chai = require('chai') 
  
// Importing all the files  
const place = require('../location/location');

  
const expect = chai.expect 
  
// tests using describe 
describe('Testing the locations', function () { 
  
    // We will describe each single test using it 
    it(" Given location Pluto, Philippines", async () => { 
        
        let obj = 'pluto';
        let fare = await place.getPlaceLatitudeLongitude('pluto');
        expect('Pluto, Philippines').to.equal(fare.address); 
    }) 
    it(" Given location 'nyc, New York'", async () => { 
        
        let obj = 'pluto';
        let fare = await place.getPlaceLatitudeLongitude('nyc');
        expect('nyc, New York').to.equal(fare.address); 
    }) 
    it(" Given location 'Arizona City, Arizona'", async () => { 
        
        let obj = 'pluto';
        let fare = await place.getPlaceLatitudeLongitude('Arizona');
        expect('Arizona City, Arizona').to.equal(fare.address); 
    }) 
})