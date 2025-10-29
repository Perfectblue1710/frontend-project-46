import { readFile, parseFile } from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const file1Content = readFile(filepath1);
  const file2Content = readFile(filepath2);

  const data1 = parseFile(file1Content, filepath1);
  const data2 = parseFile(file2Content, filepath2);

  return { data1, data2 };
};

export default genDiff;
