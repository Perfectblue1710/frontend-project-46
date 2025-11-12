import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

export const parseFile = (data, filepath) => {
  const ext = path.extname(filepath).toLowerCase();

  if (ext === '.json') {
    return JSON.parse(data);
  }
  if (ext === '.yml' || ext === '.yaml') {
    return yaml.load(data);
  }

  throw new Error(`Unknown file format: ${ext}`);
};
