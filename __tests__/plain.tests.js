import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

const formats = ['json', 'yml'];

describe('plain formatter', () => {
  const expected = readFile('expected_plain.txt').trim();

  test.each(formats)('format: %s', (ext) => {
    const file1 = getFixturePath(`file1.${ext}`);
    const file2 = getFixturePath(`file2.${ext}`);

    const result = genDiff(file1, file2, 'plain');

    expect(result.trim()).toBe(expected);
  });
});
