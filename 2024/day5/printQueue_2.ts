import { readFileSync } from "fs";
import { join } from "path";

// const wordSearchString = readFileSync(join(__dirname, 'example.txt')).toString();
const wordSearchString = readFileSync(join(__dirname, 'challenge.txt')).toString();

const wordSearchMatrix =  wordSearchString.split('\n').filter(row => row);

let res= 0;

function isValidXMAS(char: string){
  return char === 'S' || char === 'M'
}

for (let cIndex = 0; cIndex < wordSearchMatrix.length; cIndex++) {
  for (let rIndex = 0; rIndex < wordSearchMatrix[0].length; rIndex++) {
    if(wordSearchMatrix[cIndex][rIndex] === 'A'){
      // \ side of the X
      const lowerRight = wordSearchMatrix[cIndex + 1]?.[rIndex + 1];
      const upperLeft = wordSearchMatrix[cIndex - 1]?.[rIndex - 1];

      // / side of the X
      const upperRight = wordSearchMatrix[cIndex - 1]?.[rIndex + 1];
      const lowerLeft = wordSearchMatrix[cIndex + 1]?.[rIndex - 1];

      if (
        !isValidXMAS(lowerRight) ||
        !isValidXMAS(upperLeft) ||
        !isValidXMAS(upperRight) ||
        !isValidXMAS(lowerLeft)
      ) continue;

      if(lowerRight === upperLeft || upperRight === lowerLeft) continue;
      
      res++;
    }
  }
}

console.log(wordSearchString)
console.log({res})
