const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];



fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});














// const { fetchBreedDescription } = require('./breedFetcher');

// const breedName = process.argv[2];

// fetchBreedDescription(breedName, (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// });

// // fetchBreedDescription('Siberian', (error, response, body) => {
// //   if (error) {
// //    console.log("\n******THERE WAS AN ERROR******\n\n", error);
// //  }
// //  const data = JSON.parse(body);
// //  console.log(data[0].description);
// // })