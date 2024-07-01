import checksTheFormat from './Reading-files.js';
import diffAst from './ast.js';
import format from './formater.js';

const gendif = (file1, file2, formatName = 'stylish') => {
  const obj1 = checksTheFormat(file1);
  const obj2 = checksTheFormat(file2);
  const difObj = diffAst(obj1, obj2);
  return format(difObj, formatName);
};

export default gendif;
