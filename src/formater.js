import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

const formater = { stylish, plain, json };

export default (diff, formatName) => formater[formatName](diff);
