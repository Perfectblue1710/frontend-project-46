import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

export const parseFile = (data, filepath) => {
  const ext = path.extname(filepath).toLowerCase();

  switch (ext) {
    case '.json':
      return JSON.parse(data);

    case '.yml':
    case '.yaml':
      return yaml.load(data);

    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
}
