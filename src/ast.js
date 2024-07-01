import _ from 'lodash';

const diffAst = (file1, file2) => {
  const keySort = Object.keys({ ...file1, ...file2 });
  const key = _.sortBy(keySort);
  const result = key.map((keys) => {
    if (!_.has(file1, keys)) {
      return {
        name: keys, type: 'added', value: file2[keys],
      };
    }
    if (!_.has(file2, keys)) {
      return {
        name: keys, type: 'deleted', value: file1[keys],
      };
    }
    if (_.isPlainObject(file1[keys]) && _.isPlainObject(file2[keys])) {
      return {
        name: keys, type: 'nested', children: diffAst(file1[keys], file2[keys]),
      };
    }
    if (file1[keys] !== file2[keys]) {
      return {
        name: keys, type: 'changed', oldValue: file1[keys], newValue: file2[keys],
      };
    }
    return {
      name: keys, type: 'unchanged', value: file1[keys],
    };
  });
  return result;
};

export default diffAst;
