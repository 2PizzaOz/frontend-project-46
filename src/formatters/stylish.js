import _ from 'lodash';

const add = '  + ';
const delet = '  - ';
const notChan = '    ';

const indent = (deep) => '    '.repeat(deep);

const getValue = (file, deep) => {
  if (!_.isObject(file)) {
    return file;
  }
  const getKey = Object.keys(file);
  const value = getKey.map((keys) => `${indent(deep + 2)}${keys}: ${getValue(file[keys], deep + 1)}`);
  return `{\n${value.join('\n')}\n${indent(deep + 1)}}`;
};

export default (data) => {
  const iter = (tree, deep = 0) => {
    const result = tree.flatMap((node) => {
      if (node.type === 'added') {
        return `${indent(deep)}${add}${node.name}: ${getValue(node.value, deep)}`;
      }
      if (node.type === 'deleted') {
        return `${indent(deep)}${delet}${node.name}: ${getValue(node.value, deep)}`;
      }
      if (node.type === 'unchanged') {
        return `${indent(deep)}${notChan}${node.name}: ${getValue(node.value)}`;
      }
      if (node.type === 'changed') {
        return [
          `${indent(deep)}${delet}${node.name}: ${getValue(node.oldValue, deep)}`,
          `${indent(deep)}${add}${node.name}: ${getValue(node.newValue, deep)}`,
        ];
      }
      if (node.type === 'nested') {
        return `${indent(deep)}${notChan}${node.name}: ${iter(node.children, deep + 1)}`;
      }
      throw new Error(`"${node.type}" type is not supported by the formatter`);
    });
    return `{\n${result.join('\n')}\n${indent(deep)}}`;
  };
  return iter(data);
};
