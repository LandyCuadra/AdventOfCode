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

const reportCalculator = {
  'oxygen': (tempBinaryReport) => {
    for(let i = 0; i < tempBinaryReport.length; i++){

      if(tempBinaryReport[i].length == 1){
        return tempBinaryReport.map((bitArray) => bitArray[0]);
      }

      const frequency = tempBinaryReport[i].reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});

      let maxBit = frequency['0'] === frequency['1'] ? '1' : Object.keys(frequency).reduce((acc, value) => frequency[acc] > frequency[value] ? acc :  value);

      for(let j = tempBinaryReport[i].length-1; j >= 0; j--){
        if(tempBinaryReport[i][j] != maxBit){
          for(let row of tempBinaryReport){
            row.splice(j, 1);
          }
        }
      }
    }
    return tempBinaryReport.map((bitArray) => bitArray[0]);
  },
  'co2': (tempBinaryReport) => {
    for(let i = 0; i < tempBinaryReport.length; i++){
      if(tempBinaryReport[i].length == 1){
        return tempBinaryReport.map((bitArray) => bitArray[0]);
      }

      const frequency = tempBinaryReport[i].reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});

      let minBit = frequency['0'] === frequency['1'] ? '0' : Object.keys(frequency).reduce((acc, value) => frequency[acc] < frequency[value] ? acc :  value);

      for(let j = tempBinaryReport[i].length-1; j >= 0; j--){
        if(tempBinaryReport[i][j] != minBit){
          for(let row of tempBinaryReport){
            row.splice(j, 1);
          }
        }
      }
    }
    return tempBinaryReport.map((bitArray) => bitArray[0]);
  }
};

const oxygenGeneratorRate = reportCalculator['oxygen']([...binaryReport.map(row => [...row])]);
const cO2ScrubberRate = reportCalculator['co2']([...binaryReport.map(row => [...row])]);
console.log(parseInt(oxygenGeneratorRate.join(''), 2) * parseInt(cO2ScrubberRate.join(''), 2));
