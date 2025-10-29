import fs from 'fs';
import path from 'path';

export const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
}
export const parseFile = (data, filepath) => {
  const ext = path.extname(filepath); 

  if (ext === '.json') {
    return JSON.parse(data);
  }

  throw new Error(`Unknown file format: ${ext}`);
};
