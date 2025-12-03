import { readFile, parseFile } from './parsers.js';
import buildDiffTree from './diffBuilder.js';
import format from './formatters/index.js';

const genDiff = (file1, file2, formatName = 'stylish') => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const obj1 = parseFile(data1, file1);
  const obj2 = parseFile(data2, file2);

  const diffTree = buildDiffTree(obj1, obj2);
  return format(diffTree, formatName);
};

export default genDiff;



