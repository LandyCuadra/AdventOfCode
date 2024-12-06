import { readFileSync } from "fs";
import { join } from "path";

let corruptedData = readFileSync(join(__dirname, 'example2.txt')).toString();
// const corruptedData = readFileSync(join(__dirname, 'challenge.txt')).toString();

const saveableData = (corruptedData.match(/((?:^|do\(\))(.*?)(?=don't\(\)|$))/gm) || []).join('')
const mulMatch =  saveableData.matchAll(/mul\((\d+,\d+)\)/gm)

let res= 0;

for(const match of mulMatch){
  const numbers = match[1].split(",").map(Number);
  res += Math.imul(numbers[0], numbers[1]);
}

console.log(res)
