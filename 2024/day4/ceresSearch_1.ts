import { readFileSync } from "fs";
import { join } from "path";

// let wordSearchString = readFileSync(join(__dirname, 'example.txt')).toString();
const wordSearchString = readFileSync(join(__dirname, 'challenge.txt')).toString();

const wordSearchMatrix =  wordSearchString.split('\n').filter(row => row);

let res= 0;
const lookupArray = ["X", "M", "A", "S"];
let r = 0
let l = 0
let b = 0
let t = 0

for (let cIndex = 0; cIndex < wordSearchMatrix.length; cIndex++) {
  for (let rIndex = 0; rIndex < wordSearchMatrix[0].length; rIndex++) {
    if(wordSearchMatrix[cIndex][rIndex] === 'X'){
      r = 0;
      while(r < lookupArray.length){
        if(!wordSearchMatrix[cIndex]?.[rIndex+r]) break;
        if(wordSearchMatrix[cIndex][rIndex+r] !== lookupArray[r]) break;
        r++;
        if(r >= lookupArray.length){
          res ++; 
        }
      }

      r = 0
      b = 0
      while(r < lookupArray.length){
        if(!wordSearchMatrix[cIndex+b]?.[rIndex+r]) break;
        if(wordSearchMatrix[cIndex+b][rIndex+r] !== lookupArray[r]) break;
        r++;
        b++;
        if(r >= lookupArray.length){
          res ++; 
        }
      }

      b = 0
      while(b < lookupArray.length){
        if(!wordSearchMatrix[cIndex+b]?.[rIndex]) break;
        if(wordSearchMatrix[cIndex+b][rIndex] !== lookupArray[b]) break;
        b++;
        if(b >= lookupArray.length){
          res ++; 
        }
      }

      l = 0
      b = 0
      while(b < lookupArray.length){
        if(!wordSearchMatrix[cIndex+b]?.[rIndex+l]) break;
        if(wordSearchMatrix[cIndex+b][rIndex+l] !== lookupArray[Math.abs(l)]) break;
        l--;
        b++;
        if(b >= lookupArray.length){
          res ++; 
        }
      }

      l = 0
      while(Math.abs(l) < lookupArray.length){
        if(!wordSearchMatrix[cIndex]?.[rIndex+l]) break;
        if(wordSearchMatrix[cIndex][rIndex+l] !== lookupArray[Math.abs(l)]) break;
        l--;
        if(Math.abs(l) >= lookupArray.length){
          res ++; 
        }
      }

      l = 0
      t = 0
      while(Math.abs(l) < lookupArray.length){
        if(!wordSearchMatrix[cIndex+t]?.[rIndex+l]) break;
        if(wordSearchMatrix[cIndex+t][rIndex+l] !== lookupArray[Math.abs(l)]) break;
        l--;
        t--;
        if(Math.abs(l) >= lookupArray.length){
          res ++; 
        }
      }

      t = 0
      while(Math.abs(t) < lookupArray.length){
        if(!wordSearchMatrix[cIndex+t]?.[rIndex]) break;
        if(wordSearchMatrix[cIndex+t][rIndex] !== lookupArray[Math.abs(t)]) break;
        t--;
        if(Math.abs(t) >= lookupArray.length){
          res ++; 
        }
      }

      t = 0
      r = 0
      while(r < lookupArray.length){
        if(!wordSearchMatrix[cIndex+t]?.[rIndex+r]) break;
        if(wordSearchMatrix[cIndex+t][rIndex+r] !== lookupArray[r]) break;
        t--;
        r++;
        if(r >= lookupArray.length){
          res ++; 
        }
      }
    }
  }
}

console.log(wordSearchString)
console.log({res})
