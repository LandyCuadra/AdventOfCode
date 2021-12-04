const fs = require('fs');

const measurement = fs.readFileSync('./input_sonarSweep.txt').toString().split('\n').filter(el => el);
// const measurement = fs.readFileSync('./example_sonarSweep.txt').toString().split('\n').filter(el => el);

const increasedCount = measurement.filter((measure, index) => {
  if(index + 3 <= measurement.length - 1){
    return (+measure + +measurement[index + 1] + +measurement[index + 2]) < (+measurement[index + 1] + +measurement[index + 2] + +measurement[index + 3]);
  }
}).length;

console.log(increasedCount);
