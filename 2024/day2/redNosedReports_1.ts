import {readFileSync} from 'fs';
import { join } from 'path';

// const fileBuffer = readFileSync(join(__dirname, 'example.txt'));
const fileBuffer = readFileSync(join(__dirname, 'challenge.txt'));
const reports = fileBuffer.toString().trim().split('\n').reduce<number[][]>((acc, rowString) => {
  const rowArray = rowString.split(' ').map(Number);
  acc.push(rowArray);
  return acc;
}, []);

let safeReports = 0;
let maxDiffer = 3;

for(const report of reports){
  let prev=report[0];
  let sortOrder = prev < report[1] ? 'asc' : 'desc';
  for(let i = 1 ; i < report.length ; i++){
    const value = report[i];
    if(sortOrder === 'asc'){
      if (
        prev > value ||
        Math.abs(prev - value) === 0 ||
        Math.abs(prev - value) > maxDiffer
      ) {
        break;
      }
    } else {
      if (
        prev < value ||
        Math.abs(prev - value) === 0 ||
        Math.abs(prev - value) > maxDiffer
      ) {
        break;
      }
    }

    if(i === report.length  - 1){
      safeReports++;
    }
    prev = value;
  }
}

console.log(safeReports)
