import fs from 'node:fs';
import * as path from 'path';
import { cwd } from 'node:process';

 const veyv = cwd()

const resultVeyv = path.resolve('fixtures/file1.json');

console.log(resultVeyv)

// const file1 = './fixtures/file1.json'
// try {
//     const data = fs.readFileSync(file1, 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
//  const fileJson1 = './fixtures/file1.json'
//  const fileJsom2 = './fixtures/file2.json'
// const file1 =  fs.readFileSync(fileJson1, 'utf8')
// const file2 =  fs.readFileSync(fileJsom2, 'utf8')
// const parseFile = (file1, file2) => {
//   const fileObj1 = JSON.parse(file1, (key, value) => {
//     return typeof value === "object" ? undefined : value;
  
//   })

//   console.log(fileObj1);
  
//   const fileObj2 = JSON.parse(file2)
  
 

// }
//  parseFile(file1, file2)

