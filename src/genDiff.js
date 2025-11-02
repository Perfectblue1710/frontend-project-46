import { readFile, parseFile } from './parsers.js';
import _ from 'lodash';
const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const obj1 = parseFile(data1, filepath1);
  const obj2 = parseFile(data2, filepath2);
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const lines = keys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (!Object.hasOwn(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return [`  - ${key}: ${obj1[key]}`, `  + ${key}: ${obj2[key]}`];
    }
    return `    ${key}: ${obj1[key]}`;
  });
  const result = lines.flat().join('\n');
  return `{\n${result}\n}`;
};
export default genDiff;


