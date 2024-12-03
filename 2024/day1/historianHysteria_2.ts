import {readFileSync} from 'fs';
import { join } from 'path';

const locationsLists = readFileSync(join(__dirname, 'historianHysteria_challenge.txt')).toString().trim().split('\n').reduce<number[][]>((acc, rowString) => {
  const rowArray = rowString.split('   ').map(Number);
  if(rowArray.length === 2 && rowArray.every(item => typeof item  === 'number')){
    acc[0].push(rowArray[0])
    acc[1].push(rowArray[1])
  }
  return acc;
}, [[],[]]);

locationsLists[0] = locationsLists[0].sort((a, b) => a - b);
locationsLists[1] = locationsLists[1].sort((a, b) => a - b);

const result = locationsLists[0].reduce((acc, value)=> {
  const occurrences = locationsLists[1].filter(location => location === value).length;
  acc += value * occurrences;
  return acc;
}, 0)

console.log(result)
