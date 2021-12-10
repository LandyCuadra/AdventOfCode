const fs = require('fs');

const binaryMatrix = fs.readFileSync('./input_binaryDiagnostic.txt').toString().split('\n').filter((el) => el).map((el) => {
  if(el){
    return el.split('');
  }
});

// const binaryMatrix = fs.readFileSync('./example_binaryDiagnostic.txt').toString().split('\n').filter((el) => el).map((el) => {
//   if(el){
//     return el.split('');
//   }
// });

const binaryReport =  binaryMatrix[0].map((_, index) => binaryMatrix.map(row => row[index]));

const gammaRate = [];
const epsilonRate = [];

for(let row of binaryReport){
  const frequency = row.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  gammaRate.push(frequency['0'] > frequency['1'] ? '0' : '1');
  epsilonRate.push(frequency['0'] < frequency['1'] ? '0' : '1');
}

console.log(parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2));
