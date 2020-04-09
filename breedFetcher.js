const request = require('request');
const searchCat = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchCat}`;


request(url, (error, response, body) => {
  if (!searchCat) {
    return console.log("Did you include a cat type?");
  }
  if (error) {
    console.log("\n******THERE WAS AN ERROR******\n\n", error);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);

  // console.log("error: ", error)
  // console.log("response: ", response)
  // console.log("body: ", data)
  // console.log(data[0].description)
  // console.log(typeof data)
  
  
});

