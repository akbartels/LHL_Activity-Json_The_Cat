const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, response, body) => {
  if (!breedName) {
    return console.log("Did you add a breed name?");
  }
  if (error) {
    return console.log("**ERROR**: ", error);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});

