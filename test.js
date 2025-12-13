import { parseFile } from './src/parsers.js';
import buildDiffTree from './src/diffBuilder.js';

const obj1 = parseFile('__fixtures__/file1.json');
const obj2 = parseFile('__fixtures__/file2.json');
console.log('obj1:', typeof obj1, obj1);
console.log('obj2:', typeof obj2, obj2);

const result = buildDiffTree(obj1, obj2);
console.log('buildDiffTree result:', typeof result, result);
