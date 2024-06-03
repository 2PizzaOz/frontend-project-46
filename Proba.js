import { log } from 'node:console';
import fs from 'node:fs';
import _ from 'lodash';

// const fileJson1 = './fixtures/file1.json'
// const fileJsom2 = './fixtures/file2.json'

// const file1 =  JSON.parse(fs.readFileSync(fileJson1, 'utf8'))
// const file2 =  JSON.parse(fs.readFileSync(fileJsom2, 'utf8'))




export const test = (fileJson1, fileJsom2) => {
const file1 =  JSON.parse(fs.readFileSync(fileJson1, 'utf8'))
const file2 =  JSON.parse(fs.readFileSync(fileJsom2, 'utf8'))
  const keySort = Object.keys({ ...file1, ...file2}); 
  const key = _.sortBy(keySort);
  for (const keys of key) {
    const val1 = file1[keys];
    const val2 = file2[keys];
    if (val1 && val2) {
      if (val1 === val2 ) {
        console.log(`  ${keys}:${val1}`)
      } else {console.log(`- ${keys}:${val1}`), console.log(`+ ${keys}:${val2}`)};
    } else {val1 !== undefined ? console.log(`- ${keys}:${val1}`) : [] || val2 !== undefined ? console.log(`+ ${keys}:${val2}`) : []};
  }
};





// console.log(` ${keys}:${val1}`) : console.log(`-${keys}:${val1}`)
