import fs from 'fs';
import gendif from '../src/index.js';

const beforeJson = './__fixtures__/fileTwo1.json';
const afterJson = './__fixtures__/fileTwo2.json';
const beforeYml = './__fixtures__/fileTwo1.yml';
const afterYml = './__fixtures__/fileTwo2.yml';

const stylishFormat = 'stylish';
const plainFormat = 'plain';
const jsonFormat = 'json';

const makeDiffPath = (format) => fs.readFileSync(new URL(`../__fixtures__/${format}Diff.txt`, import.meta.url), 'utf8');

test.each([
  [beforeJson, afterJson, stylishFormat, makeDiffPath(stylishFormat)],
  [beforeYml, afterYml, stylishFormat, makeDiffPath(stylishFormat)],
  [beforeJson, afterJson, plainFormat, makeDiffPath(plainFormat)],
  [beforeYml, afterYml, plainFormat, makeDiffPath(plainFormat)],
  [beforeJson, afterJson, jsonFormat, makeDiffPath(jsonFormat)],
  [beforeYml, afterYml, jsonFormat, makeDiffPath(jsonFormat)],
])('test (%s, %s, %s)', (before, after, format, diff) => {
  expect(gendif(before, after, format)).toEqual(diff);
});
