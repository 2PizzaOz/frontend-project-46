import fs from 'node:fs';
import _ from 'lodash';

const showeTheDiffer = (fileJson1, fileJsom2) => {
  let result = '';
  const file1 = JSON.parse(fs.readFileSync(fileJson1, 'utf8'));
  const file2 = JSON.parse(fs.readFileSync(fileJsom2, 'utf8'));
  const keySort = Object.keys({ ...file1, ...file2 });
  const key = _.sortBy(keySort);
  for (const keys of key) {
    const val1 = file1[keys];
    const val2 = file2[keys];
    if (val1 && val2) {
      if (val1 === val2) {
        result += `\n   ${keys}:${val1}`;
      } else {result += `\n - ${keys}:${val1}`, result += `\n + ${keys}:${val2}` }
    } else {val1 !== undefined ? result += `\n - ${keys}:${val1}` : [] || val2 !== undefined ? result += `\n + ${keys}:${val2}` : []};
  }
  
  console.log(`{${result}\n}`);
  return result;

  
};
showeTheDiffer('file1.json', 'file2.json')

export default showeTheDiffer;