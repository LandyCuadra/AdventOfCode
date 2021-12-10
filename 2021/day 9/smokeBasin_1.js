const fs = require('fs');

const heightMap = fs.readFileSync('./input_smokeBasin.txt').toString().split('\n').filter(el => el).map(el => {
  return el.split('').map(Number);
});

// const heightMap = fs.readFileSync('./example_smokeBasin.txt').toString().split('\n').filter(el => el).map(el => {
//   return el.split('').map(Number);
// });

let risk = 0;

heightMap.map((row, index) => {
  row.map((point, location) => {
    if(
      ((index-1 < 0) || point < heightMap[index-1][location]) &&
      ((index+1 >= heightMap.length) || point < heightMap[index+1][location]) &&
      ((location-1 < 0) || point < heightMap[index][location-1]) &&
      ((location+1 >= row.length) || point < heightMap[index][location+1])
    ){
      risk += parseInt(point)+1;
    }
  });
});

console.log(risk);

