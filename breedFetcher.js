const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!breedName) {
      callback("Breed not found", null);
    } else if (error) {
      callback(error, null);
    } else if (!data[0]) {
      callback("no match", null);
    } else {
      callback(null, data[0].description);
    }
    
    
  });
};

module.exports = { fetchBreedDescription };

// callback = function(error, desc) {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// }