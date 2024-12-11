import { readFileSync } from "fs";
import { join } from "path";

let wordSearchString = readFileSync(join(__dirname, 'example.txt')).toString();
// const corruptedData = readFileSync(join(__dirname, 'challenge.txt')).toString();

const wordSearchMatrix =  wordSearchString.split('\n').filter(row => row);

let res= 0;
let xmasRegex = new RegExp(/(?=(XMAS|SAMX))/gm)


for (let rIndex = 0; rIndex < wordSearchMatrix[0].length; rIndex++) {
  let dhIndex = rIndex;
  let dvIndex = 0;

  while (wordSearchMatrix[dvIndex]?.[dhIndex]) {
    if (wordSearchMatrix[dvIndex][dhIndex])
      wordSearchString += wordSearchMatrix[dvIndex][dhIndex];
    dhIndex++;
    dvIndex++;
  }
  wordSearchString += "\n";

  if (rIndex > 0) {
    dhIndex = rIndex;
    dvIndex = wordSearchMatrix.length;
    while (wordSearchMatrix[dvIndex]?.[dhIndex]) {
      if (wordSearchMatrix[dvIndex][dhIndex])
        wordSearchString += wordSearchMatrix[dvIndex][dhIndex];
      dhIndex++;
      dvIndex--;
    }
    wordSearchString += "\n";
  }

  for (let colIndex = 0; colIndex < wordSearchMatrix.length; colIndex++) {
    wordSearchString += wordSearchMatrix[colIndex][rIndex];
  }
  wordSearchString += "\n";

  for(let colIndex = 1 ; colIndex < wordSearchMatrix.length && rIndex === 0; colIndex++){
    dhIndex = 0;
    dvIndex = colIndex;
    while (wordSearchMatrix[dvIndex]?.[dhIndex]) {
      if (wordSearchMatrix[dvIndex][dhIndex])
        wordSearchString += wordSearchMatrix[dvIndex][dhIndex];
      dvIndex++;
      dhIndex++;
    }
    wordSearchString += "\n";

    dhIndex = 0;
    dvIndex = colIndex;
    while (wordSearchMatrix[dvIndex]?.[dhIndex]) {
      if (wordSearchMatrix[dvIndex][dhIndex])
        wordSearchString += wordSearchMatrix[dvIndex][dhIndex];
      dvIndex--;
      dhIndex++;
    }
    wordSearchString += "\n";
  }
}

const coincidences = wordSearchString.match(xmasRegex) || []
console.log(wordSearchString)
console.log(coincidences)
res += coincidences.length;
console.log(res)
