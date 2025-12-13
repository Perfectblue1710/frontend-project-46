import { parseFile } from './parsers.js';
import buildDiffTree from './diffBuilder.js';
import format from './formatters/index.js';

const genDiff = (file1, file2, formatName = 'stylish') => {
  console.log('=== DEBUG START ===');
  console.log('Input file1:', file1);
  console.log('Input file2:', file2);
  console.log('Input formatName:', formatName);
  
  const obj1 = parseFile(file1); 
  const obj2 = parseFile(file2); 
  
  console.log('After parseFile - obj1 type:', typeof obj1, 'value:', obj1);
  console.log('After parseFile - obj2 type:', typeof obj2, 'value:', obj2);
  
  const diffTree = buildDiffTree(obj1, obj2);
  
  console.log('buildDiffTree result type:', typeof diffTree);
  console.log('buildDiffTree result:', diffTree);
  console.log('=== DEBUG END ===');
  
  return format(diffTree, formatName);
}

export default genDiff;



