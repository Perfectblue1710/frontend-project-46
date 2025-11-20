import { readFile, parseFile } from './parsers.js';
import buildDiffTree from './diffBuilder.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const obj1 = parseFile(data1, filepath1);
  const obj2 = parseFile(data2, filepath2);

  const diffTree = buildDiffTree(obj1, obj2);
  return format(diffTree, formatName);
};

export default genDiff;



