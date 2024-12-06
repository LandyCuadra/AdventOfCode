import { readFileSync } from "fs";
import { join } from "path";

// const corruptedData = readFileSync(join(__dirname, 'example.txt')).toString();
const corruptedData = readFileSync(join(__dirname, 'challenge.txt')).toString();

const saveableData = corruptedData.matchAll(/mul\((\d+,\d+)\)/gm)

let res= 0;
for(const match of saveableData){
  const numbers = match[1].split(',').map(Number)
  console.log(numbers)
  res += Math.imul(numbers[0], numbers[1]);
}

console.log(res)
