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
let ascMaxDiff = [-3, -1];
let desMaxDiff = [1, 3];

const isValidReport = (report: number[]) => {
  const reportDifferences = report.reduce((diffs, level, i) => {
    if(i===0){
      return diffs;
    }
    const prevLevel = report[i-1];
    
    diffs.push(prevLevel-level)
    
    return diffs;
  }, [] as number[])

  const isAllAscedant = reportDifferences.every(diff => diff >= ascMaxDiff[0] && diff <= ascMaxDiff[1] )
  const isAllDescendant = reportDifferences.every(diff => diff >= desMaxDiff[0] && diff <= desMaxDiff[1] )

  if(isAllAscedant || isAllDescendant){
    return true;
  }

  return false
}

for(const report of reports){
  const isValid = isValidReport(report)
  if(isValid){
    safeReports++;
  }
}

console.log(safeReports)
