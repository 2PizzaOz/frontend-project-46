import _ from 'lodash';

const getValue = (file) => {
  if (!_.isObject(file)) {
    const format = _.isString(file) ? `'${file}'` : `'${file}'`;
    return format;
  }
  return '[complex value]';
};

export default (data) => {
  const iter = (tree, acc = []) => {
    const result = tree.map((node) => {
      const pathAcc = [...acc, node.name];
      const actualAcc = pathAcc.join('.');
      if (node.type === 'added') {
        return `Property '${actualAcc}' was added with value: ${getValue(node.value)}`;
      }
      if (node.type === 'deleted') {
        return `Property '${actualAcc}' was removed`;
      }
      if (node.type === 'unchanged') {
        return null;
      }
      if (node.type === 'changed') {
        return `Property '${actualAcc}' was updated. from ${getValue(node.oldValue)} to ${getValue(node.newValue)}`;
      }
      if (node.type === 'nested') {
        return `${iter(node.children, pathAcc)}`;
      }
      throw new Error(`"${node.type}" type is not supported by the formatter`);
    })
      .filter((element) => element !== null);
    return `${result.join('\n')}`;
  };
  return iter(data);
};
