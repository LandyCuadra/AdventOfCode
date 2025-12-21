import { readFileSync } from "fs";
import { join } from "path";

let input = readFileSync(join(__dirname, 'example.txt')).toString();
// const input = readFileSync(join(__dirname, 'challenge.txt')).toString();

const rulesAndPages =  input.split('\n\n');
const rules = rulesAndPages[0].split('\n').map (rule => rule.split('|'));
const pages = rulesAndPages[1].split('\n');

for(const page of pages){

}
