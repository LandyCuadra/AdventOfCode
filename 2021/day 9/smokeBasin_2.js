const fs = require('fs');

const heightMap = fs.readFileSync('./input_smokeBasin.txt').toString().split('\n').filter(el => el).map(el => {
  return el.split('').map(Number);
});

// const heightMap = fs.readFileSync('./example_smokeBasin.txt').toString().split('\n').filter(el => el).map(el => {
//   return el.split('').map(Number);
// });

let basins = [];

const map = heightMap.map((row, index) => {
  return row.map((point, location) => {
    return heightMap[index][location] == 9 ? 1 : 0;
  });
});

function getSize(index, location, map){
  if(map[index][location] == 1)
    return 0;

  map[index][location] = 1;
  let size = 1;

  if(index-1 >= 0 && heightMap[index][location]+1 === heightMap[index-1][location]){
    size += getSize(index-1, location, map);
  }

  if(index+1 < heightMap.length && heightMap[index][location]+1 === heightMap[index+1][location]){
    size += getSize(index+1, location, map);
  }

  if(location-1 >= 0 && heightMap[index][location]+1 === heightMap[index][location-1]){
    size += getSize(index, location-1, map);
  }

  if(location+1 < heightMap[index].length && heightMap[index][location]+1 === heightMap[index][location+1]){
    size += getSize(index, location+1, map);
  }

  return size;
}

heightMap.map((row, index) => {
  row.map((point, location) => {
    if(
      ((index-1 < 0) || point < heightMap[index-1][location]) &&
      ((index+1 >= heightMap.length) || point < heightMap[index+1][location]) &&
      ((location-1 < 0) || point < heightMap[index][location-1]) &&
      ((location+1 >= row.length) || point < heightMap[index][location+1])
    ){
      if(index < 1){

        console.log('at pos: ', index-1, location);
        console.log((index-1 < 0) || heightMap[index-1][location]);
        console.log('at pos: ', index+1, location);
        console.log((index+1 >= heightMap.length) || heightMap[index+1][location]);
        console.log('at pos: ', index, location-1);
        console.log((location-1 < 0) || heightMap[index][location-1]);
        console.log('at pos: ', index, location+1);
        console.log((location+1 >= row.length) || heightMap[index][location+1]);
        basins.push(getSize(index, location, map));
      }
    }
  });
});

basins.sort((a, b) => b - a);
console.log(basins);
console.log(basins[0] * basins[1] * basins[2]);
