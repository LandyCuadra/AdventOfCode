import {getListFromFile} from '../../utils';

const rotationList = getListFromFile(__dirname,'challenge');

let dialValue = 50;
let zeroCoincidence = 0;
const dialHandler = {
  L: (length: number) => {
    console.log('dialValue', dialValue);
    console.log('length', length);
    console.log('dial - L', dialValue - length);
    if(dialValue - length < 0){
      let remainingLength = (length - dialValue) - 1;
      dialValue = 99;
      remainingLength = remainingLength % 100;
      dialValue = dialValue - remainingLength;
    }else{
      dialValue = dialValue - length;
    }
    console.log('ending dialValue', dialValue);

    if(dialValue === 0){
      zeroCoincidence++;
    }
  },
  R: (length: number) => {
    console.log('dialValue', dialValue);
    console.log('length', length);
    console.log('dial + L', dialValue + length);
    if(dialValue + length > 99){
      let remainingLength = (length - (100 - dialValue));
      dialValue = 0;
      remainingLength = remainingLength % 100;
      dialValue = dialValue + remainingLength;
    }else{
      dialValue = dialValue + length;
    }

    console.log('ending dialValue', dialValue);
    if(dialValue === 0){
      zeroCoincidence++;
    }
  }

};

for(const rotation of rotationList){
  console.log(rotation);
  const direction = rotation.at(0);
  const length = +rotation.slice(1);
  if(direction === undefined) continue;

  const directionType = direction === 'L' ? 'L' : 'R';
  dialHandler[directionType](length);

}

console.log(zeroCoincidence);
