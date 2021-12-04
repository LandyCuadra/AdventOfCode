const fs = require('fs');

const measurement = fs.readFileSync('./input_sonarSweep_1.txt').toString().split('\n').filter(el => el);

const increasedCount = measurement.filter((measure, index) => +measure > +measurement[index - 1]).length;
console.log(increasedCount);
