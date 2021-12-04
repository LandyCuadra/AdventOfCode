const fs = require('fs');

const commands = fs.readFileSync('./input_dive.txt').toString().split('\n').filter((el) => el).map((el) => {
  if(el){
    const elArray = el.split(' ');
    return {operation: elArray[0], value: +elArray[1]};
  }
});
// const commands = fs.readFileSync('./example_dive.txt').toString().split('\n').filter((el) => el).map((el) => {
//   if(el){
//     const elArray = el.split(' ');
//     return {operation: elArray[0], value: +elArray[1]};
//   }
// });

let horizontal = 0;
let depth = 0;

const submarineOperations = {
  'forward': (value) => {
    horizontal += value;
  },
  'down': (value) => {
    depth += value;
  },
  'up': (value) => {
    depth -= value;
  }
};

commands.map(el => submarineOperations[el.operation](el.value));

console.log(horizontal * depth);
