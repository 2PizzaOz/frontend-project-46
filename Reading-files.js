import fs from 'fs'
import YAML from 'yaml'
import * as path from 'path';

const checksTheFormat = (file) => {
  if (path.extname(file) === '.yml' || path.extname(file) === '.yaml') {
    const fileYaml= YAML.parse(fs.readFileSync(file, 'utf8'));
  return fileYaml;
  };
  if (path.extname(file) === '.json') {
    const fileJson = JSON.parse(fs.readFileSync(file, 'utf8'));
  return fileJson;
  };
  return;
};

export default checksTheFormat;


